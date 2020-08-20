# Nav Bar Mock Glossier

> This repo holds the code to mock the nav bar of the sire Glossier.
  Instructions to install dependencies and start the server are below.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding MySQL database
(Must have a working MySQL database on your machine)
1. Update the credentials to match your MySQL credentials in ./db/index.js
2. Run the schema file from the root directory of this repo
    mysql -u [user] -p <./db/schema.sql
3. Seed the database with the products
    npm seed

### Starting Server
npm run build
npm start
