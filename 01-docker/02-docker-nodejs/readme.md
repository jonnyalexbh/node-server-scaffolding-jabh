# Docker NodeJs
### Run, test your image in a container & publish

```sh
$ docker build -t docker-nodejs .
$ docker run -p 8080:4000 -d --name test-docker docker-nodejs
$ docker exec -it test-docker bash

$ docker tag docker-nodejs:latest jonnyalexbh/docker-nodejs:latest
$ docker push jonnyalexbh/docker-nodejs:latest
```

### Run nodemon develop

```sh
$ docker run -p 8080:4000 -d --name test-docker -v $(pwd):/home/node/app docker-nodejs
$ docker logs --tail 10 -f test-docker
```
