FROM node:alpine
WORKDIR /code
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
EXPOSE 5173
COPY . /frontend/
RUN pnpm i
CMD ["pnpm", "run", "dev"]

