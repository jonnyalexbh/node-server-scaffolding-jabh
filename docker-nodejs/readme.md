# Docker NodeJs

### Dockerfile Production

```docker
FROM node:14.15.4

# specifies the application directory
WORKDIR /home/node/app

# copying package.json file to the /home/node/app directory
COPY package.json .
COPY package-lock.json .

# copying rest of the application to /home/node/app directory
COPY . .

# installing npm
RUN npm install

EXPOSE 4000

# production
# ENTRYPOINT ["node", "app.js"]

# develop
CMD ["npm", "run", "start:dev"]
```
### Run, test your image in a container & publish

```sh
$ docker build -t docker-nodejs-jabh .
$ docker run -p 8080:4000 -d --name test-docker docker-nodejs-jabh
$ docker exec -it test-docker bash

$ docker tag docker-nodejs-jabh:latest jonnyalexbh/docker-nodejs-jabh:latest
$ docker push jonnyalexbh/docker-nodejs-jabh:latest
```

### Run nodemon develop

```sh
$ docker run -p 8080:4000 -d --name test-docker -v $(pwd):/home/node/app docker-nodejs-jabh
$ docker logs --tail 10 -f test-docker
```
