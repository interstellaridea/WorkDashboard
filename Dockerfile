FROM node:9.11.1-slim

# make and set dir in container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install pkgs and copy over app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

EXPOSE 5000

# start server | --inspect is active
CMD ["npm", "start"]