# Lambda AWS MySQL

### Invoking Functions Locally
```sh
$ sam local invoke -e event.json --env-vars env.json
$ sam local invoke -e event.json --env-vars env.json --docker-network host
```
#### env.json

```
{
  "HelloFunction": {
    "YEAR": "2020",
    "DB_HOST": "",
    "DB_NAME": "",
    "DB_USER": "",
    "DB_PASSWORD": ""
  }
}
```
