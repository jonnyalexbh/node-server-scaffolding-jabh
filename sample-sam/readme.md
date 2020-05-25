# AWS SAM

### Accelerating Serverless Development with AWS
```sh
aws s3 mb s3://jabh-sam

aws cloudformation package --template-file template.yaml --output-template-file sam-template.yaml --s3-bucket jabh-sam
 
aws cloudformation deploy --template-file sam-template.yaml --stack-name hello-sam-tankis --profile aws-training --capabilities CAPABILITY_IAM
```
