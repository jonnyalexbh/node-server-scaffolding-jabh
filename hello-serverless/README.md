# Serverless Framework

**Install**

```sh
$ npm install -g serverless
```
**Create and invoke**
```sh
$ sls create -t aws-nodejs -p hello-serverless
$ sls invoke local -f hello
$ sls invoke local -f hello -d '{"name": "jonnyalexbh"}'
```

**Deploy**
```sh
$ sls deploy
$ sls deploy --aws-profile aws-training
$ sls remove --aws-profile aws-training
```
