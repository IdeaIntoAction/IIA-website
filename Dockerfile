# Stage 1: Build the application
FROM node:lts-alpine as dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Create the production image
FROM node:lts-alpine as production
WORKDIR /app
COPY --from=dev /app/dist ./dist
RUN yarn install --production --frozen-lockfile
EXPOSE 3000
CMD ["yarn", "start"]
