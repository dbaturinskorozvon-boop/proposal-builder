const DATA_STORE = {
    provider: "github",

    github: {
        owner: "dbaturinskorozvon-boop",
        repo: "proposal-builder"
    },

    gitlab: {
        baseUrl: "https://gitlab.skorozvon.ru",
        project: "GROUP%2Fproposal-builder"
    },

    branch: "main"
};

const DATA_FILES = {
    data: "data.json",
    proposals: "proposals.json"
};

function dsHeaders(token) {
    const headers = {};
    if (token) {
        if (DATA_STORE.provider === "gitlab") {
            headers["PRIVATE-TOKEN"] = token;
        } else {
            headers["Authorization"] = `token ${token}`;
        }
    }
    if (DATA_STORE.provider === "github") {
        headers["Accept"] = "application/vnd.github.v3+json";
    }
    return headers;
}

function dsFileApiUrl(path) {
    if (DATA_STORE.provider === "gitlab") {
        return `${DATA_STORE.gitlab.baseUrl}/api/v4/projects/${DATA_STORE.gitlab.project}/repository/files/${encodeURIComponent(path)}`;
    }
    return `https://api.github.com/repos/${DATA_STORE.github.owner}/${DATA_STORE.github.repo}/contents/${path}`;
}

function dsRawUrl(path) {
    if (DATA_STORE.provider === "gitlab") {
        return `${dsFileApiUrl(path)}/raw?ref=${DATA_STORE.branch}&t=${Date.now()}`;
    }
    return `https://raw.githubusercontent.com/${DATA_STORE.github.owner}/${DATA_STORE.github.repo}/${DATA_STORE.branch}/${path}?t=${Date.now()}`;
}

async function dsReadJsonPublic(path) {
    const response = await fetch(dsRawUrl(path));
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Ошибка загрузки данных: " + response.status);
    return await response.json();
}

async function dsReadFile(path, token) {
    const response = await fetch(`${dsFileApiUrl(path)}?ref=${DATA_STORE.branch}`, { headers: dsHeaders(token) });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Не удалось прочитать файл: " + response.status);
    const file = await response.json();
    const text = decodeURIComponent(escape(atob(String(file.content).replace(/\n/g, ""))));
    return { text, sha: file.sha || null };
}

async function dsWriteJson(path, data, token, message) {
    const text = JSON.stringify(data, null, 2);
    const headers = { ...dsHeaders(token), "Content-Type": "application/json" };

    if (DATA_STORE.provider === "gitlab") {
        const url = dsFileApiUrl(path);
        const body = JSON.stringify({ branch: DATA_STORE.branch, content: text, commit_message: message });
        let response = await fetch(url, { method: "PUT", headers, body });
        if (response.status === 404 || response.status === 400) {
            response = await fetch(url, { method: "POST", headers, body });
        }
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "Ошибка сохранения в GitLab");
        }
        return;
    }

    const existing = await dsReadFile(path, token);
    const body = {
        message,
        content: btoa(unescape(encodeURIComponent(text))),
        branch: DATA_STORE.branch
    };
    if (existing && existing.sha) body.sha = existing.sha;

    const response = await fetch(dsFileApiUrl(path), { method: "PUT", headers, body: JSON.stringify(body) });
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || "Ошибка сохранения в GitHub");
    }
}

async function dsTestToken(token) {
    const url = DATA_STORE.provider === "gitlab"
        ? `${DATA_STORE.gitlab.baseUrl}/api/v4/projects/${DATA_STORE.gitlab.project}`
        : `https://api.github.com/repos/${DATA_STORE.github.owner}/${DATA_STORE.github.repo}`;
    return await fetch(url, { headers: dsHeaders(token) });
}
