🚀

# Soho House Javascript Challenge

We need to build Javascript application so that our members can learn more about the important topic of the characters of Star Wars.

This requires an API which can serve our Star Wars data and a front end that can help us list and filter the characters.

## Task Outline

### Api requirements

The api should have two endpoints (these have been defined in `src/api/routes/characters.js`) which return data from the `src/api/data.json` file. `/characters/` should return all the characters, and `/characters/:id` should return a character with that specific id.

### Frontend requirements

The frontend should have two routes - a route which lists all the characters (character list page - `/src/app/pages/characters/index.vue`), and a route which displays information on a given character (character landing page - `/src/app/pages/characters/_id.vue`). 

The character list page should link each character to their specific landing page. Filtering functionality is a nice to have.

## Task Notes

1. We use [Nuxt](https://github.com/nuxt/nuxt.js) as a base framework. For detailed explanation on how Nuxt works, checkout the [Nuxt.js docs](https://nuxtjs.org/guide).
2. Each file inside the `/test/unit` folder will be loaded as a test by the Jest test runner. Have a look at the [docs](https://facebook.github.io/jest/docs) for more information.
3. We are not expecting a professional standard UI, but do make sure it is clean and consistent.
4. Please provide the code as you would for a production app (e2e tests unnecessary).
5. If you come across time constraints, please feel free to provide comments on anything missing.

## Useful Commands

### Run entire app locally

Opens the app at `localhost:3000` with the api available at `localhost:3000/api`.

_NOTE: The api does not hot reload with this command_

```bash
yarn dev
```

### Run only the api locally (with hot reload)

```bash
yarn dev:api
```

### Run tests

```bash
yarn test
```
