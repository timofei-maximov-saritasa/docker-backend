FROM ubuntu:20.04

WORKDIR /app
COPY . /app/

EXPOSE 8000

RUN apt update
RUN apt-get install --yes curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install --yes nodejs
RUN corepack enable
RUN yarn

CMD ["yarn", "start"]
