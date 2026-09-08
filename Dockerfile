FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY server.js ./
# everything else in the repo root is the static site
COPY . ./public/
RUN rm -f /app/public/server.js /app/public/package.json /app/public/package-lock.json
ENV NODE_ENV=production PORT=8000 PUBLIC_DIR=/app/public
EXPOSE 8000
USER node
CMD ["node", "server.js"]