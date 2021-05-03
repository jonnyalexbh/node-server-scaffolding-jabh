# Node.js Development Setup

- Node.js (JavaScript Runtime Engine)
- Express (Node.js Framework to create backend application easily)
- Nodemon (JavaScript Library to reload the application whenever some file changes. useful in development)
- TypeScript: a superset of JavaScript and adds optional static typing to the language
- Docker (Platform to deploy applications using containers)

### Step by Step

```sh
$ mkdir node-ts-nodemon && cd node-ts-nodemon
$ npm init -y
$ npm install express
$ npm install -D typescript ts-node nodemon @types/node @types/express
```

### Docker Compose
```sh
$ docker-compose -f docker-compose.yml up --build
$ docker-compose up -f docker-compose.prod.yml
```

### Node JS Lib
* express

### Node JS Lib dev
* typescript
* ts-node
* nodemon
* @types/node
* @types/express
