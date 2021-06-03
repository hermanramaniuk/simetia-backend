### Config
$ npm install

$ npm knex:migrate
$ npx knex migrate:latest

$ npm knex:seed
$ npx knex seed:run

$ npm start
```
### Rotas base
#### User
- (GET) /users | optional (query: size)
- (POST) /users 
- (PUT) /users/:id
- (DELETE) /users/:id
- (GET) /users/:username/activities | optional (query: size)
- (GET) /users/:username/last-places | optional (query: size)
- (JSON RETORNO) : {
    "id_user": 2,
    "username": "gonzalez",
    "email": "gonzalez@email.com",
    "picture": "",
    "password": "U2FsdGVkX19dE3+OlCeRKkBZvWJ/NnJR0u1IxtsWMb8=",
    "group_risk": "N",
    "metadata": "{}"
  }
- (JSON ENTRADA) : {
    "username" : "Luciana",
    "email" : "luciana@email.com",
    "picture" : "",
    "group_risk" : "S",
    "password" : "123",
    "metadata" : "{}",
    "organization_id" : 1
}

Made with :heart: by Herman Ramaniuk
