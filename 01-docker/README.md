# Docker

| File | Description |
| ------ | ------ |
| Dockerfile | It describes step-by-step instructions of all the commands you need to run to assemble a Docker Image. |
| .dockerignore | It works in a way similar to the .gitignore removing from the context each folder when we try to copy or add filters or files during the process of creation of a Docker Image |

### Docker commands

| Command | Description |
| ------ | ------ |
| docker --version | |
| docker info | |

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
