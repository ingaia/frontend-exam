FROM node:lts-alpine as builder

RUN mkdir /opt/frontend-exam-ui-source

WORKDIR /opt/frontend-exam-ui-source

COPY package.json /opt/frontend-exam-ui-source

RUN yarn install

COPY . /opt/frontend-exam-ui-source

RUN yarn build

FROM nginx:stable-alpine-perl

ENV APP_PATH /opt/frontend-exam-ui

RUN mkdir -p $APP_PATH

# Copy needed files
ENV UI_ENV local
COPY --from=builder /opt/frontend-exam-ui-source/nginx.conf /etc/nginx/

COPY --from=builder /opt/frontend-exam-ui-source/build $APP_PATH