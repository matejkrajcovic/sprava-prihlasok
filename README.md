## Dev setup

- Create a new Docker container with PostgreSQL on local port 9876

```
docker create -p 127.0.0.1:5432:5432 --name sprava-prihlasok postgres
```

- Execute database migrations

```
./node_modules/.bin/db-migrate up
```

- Start webpack dev server

```
npm run dev
```