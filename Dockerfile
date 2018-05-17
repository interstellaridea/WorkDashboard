FROM node:9.11.1-slim

# make and set dir in container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install pkgs and copy over app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000 9229

# start server | --inspect is active
CMD ["npm", "run", "start"]