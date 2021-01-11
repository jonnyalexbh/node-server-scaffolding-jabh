# Docker NodeJs PostgreSQL

### Dockerfile

```yml
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

EXPOSE 3000

CMD ./scripts/start.sh
```
### Run docker-compose

```sh
$ docker-compose ps
$ docker-compose build
$ docker-compose logs
$ docker-compose logs -f
$ docker-compose logs <container_name>
$ docker-compose logs -f <container_name>
$ docker-compose up
$ docker-compose up -d
$ docker-compose up --build
$ docker-compose down	
$ docker exec -it test-docker bash
```
