FROM node:18.13.0-alpine3.16 as base
ENV APP_DIR=/app
WORKDIR ${APP_DIR}
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base as dev
EXPOSE 3000
CMD [ "yarn", "dev" ]

FROM base as builder
COPY src ./src
COPY public ./public
COPY .eslintrc.json .eslintignore ./
RUN yarn build
