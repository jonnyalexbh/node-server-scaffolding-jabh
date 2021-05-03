# Docker

| File | Description |
| ------ | ------ |
| Dockerfile | It describes step-by-step instructions of all the commands you need to run to assemble a Docker Image. |
| .dockerignore | It works in a way similar to the .gitignore removing from the context each folder when we try to copy or add filters or files during the process of creation of a Docker Image |

### Docker commands

| Command | Description |
| ------ | ------ |
| docker-compose config | show configuration |
| docker-compose ps | show services running |
| docker-compose build | build services |
| docker-compose up | start services |
| docker-compose up -d | start services in dettach |
| docker-compose logs | see logs of the services |
| docker-compose logs | see logs in follow mode |
| docker-compose logs <service_name> | see logs for a specific service |
| docker-compose logs -f <service_name> | see specific service logs with follow |
| docker-compose exec <service_name> bash | entered the app service shell |
| docker-compose down | down services |
