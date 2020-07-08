# Read file NodeJs

### Using process.argv

```sh
$ node app.js file.csv 2021
```

```sh
[
  '/Users/jonnyberrio/.nvm/versions/node/v12.16.3/bin/node',
  '/Users/jonnyberrio/Documents/projects/node-server-scaffolding-jabh/read-file-nodejs/app.js',
  'file.csv',
  '2021'
]
```

### app.js

```javascript
const name_file = process.argv[2];
const year = process.argv[3] || 2020;
```

