# Docker

| File | Description |
| ------ | ------ |
| Dockerfile | It describes step-by-step instructions of all the commands you need to run to assemble a Docker Image. |
| .dockerignore | It works in a way similar to the .gitignore removing from the context each folder when we try to copy or add filters or files during the process of creation of a Docker Image |

## Docker commands

##### _Basic_
| Command | Description |
| ------ | ------ |
| docker --version | docker version |
| docker info | docker environment information |
| docker system prune | delete everything that is not in use |

##### _Image_
| Command | Description |
| ------ | ------ |
| docker image ls | list of images |
| docker pull <image_name> | download an image |
| docker pull <image_name>:<version> | download an image specifying version |
| docker rmi id	| remove image |
| docker rmi $(docker images -a -q)	| remove all images |
| docker image prune | remove images that are not in use |
| docker history <image_name> | how the image is built |
| docker build -t <image_name> . | build image |
| docker run -p <external_port>:<internal_port> -d --name <container_name> <image_name> | create container  |

### Docker compose commands

| Command | Description |
| ------ | ------ |
| docker-compose config | validate and view the compose file |
| docker-compose ps | list containers |
| docker-compose build | build or rebuild services |
| docker-compose up | create and start containers |
| docker-compose up --build | build images before starting containers |
| docker-compose up -d | start services in detach |
| docker-compose logs | see logs of the services |
| docker-compose logs -f | see logs in follow mode |
| docker-compose logs <service_name> | see logs for a specific service |
| docker-compose logs -f <service_name> | see specific service logs with follow |
| docker-compose exec <service_name> bash | entered the app service shell |
| docker-compose down | stops and removes containers docker-compose |
| docker-compose stop | stop one or all services docker-compose |
| docker-compose stop <service_name> |stop a service docker-compose |
| docker-compose rm | delete stopped docker-compose |
