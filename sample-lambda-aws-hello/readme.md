# Lambda AWS

### Create template cloudformation
```sh
aws s3 mb s3://jabh-sam
aws cloudformation package --template template.yaml --s3-bucket jabh-sam --output-template-file sam-template.yaml --profile aws-training
```

### Install AWS SAM CLI & testing and debugging lambdas
```sh
brew tap aws/tap
brew install aws-sam-cli
sam --version
```
### Invoking Functions Locally
```sh
sam local invoke
sam local invoke -e event.json
sam local invoke -e event.json -t template.yaml
```
### Invoking Functions Locally debugging
```sh
sam local invoke -e event.json --debug-port 5858
sam local invoke -e event.json --debug-port 5858 -t helloAWS.yaml
```
### Testing and debugging lambdas VS Code => launch.json
```sh
{
  "configurations": [
    {
      "name": "Attach to SAM CLI",
      "type": "node",
      "request": "attach",
      "address": "localhost",
      "port": 5858,
      "localRoot": "${workspaceRoot}",
      "remoteRoot": "/var/task",
      "protocol": "inspector",
      "stopOnEntry": false,
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
}
```
