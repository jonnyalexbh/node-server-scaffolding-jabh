# Express With Sequelize

**Commands**

```sh
$ npm install --save sequelize
$ sequelize init
$ npx sequelize-cli model:generate --name Author --attributes first_name:string,last_name:string,email:string,date_of_birth:date
$ npx sequelize-cli model:generate --name Publication --attributes author_id:integer,title:string,body:string
$ npx sequelize-cli db:migrate
```

**Model**
- freezeTableName: true - change pluralizes table name by default
- tableName: 'authors' - change name table
- underscored - convert all camelCased columns
