🚀

**starwars** Soho House Javascript Challenge

We need to build Javascript application so that our members can learn more about the important topic of the characters of Star Wars.

This requires an API which can serve our Star Wars data and a front end that can help us list and filter the characters.


## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start
```

## Nuxt

We use [Nuxt](https://github.com/nuxt/nuxt.js) as a base framework. For detailed explanation on how Nuxt works, checkout the [Nuxt.js docs](https://nuxtjs.org/guide).


## Linting

We're using [ESLint](https://eslint.org/) to lint our code.

### Running linter

```bash
yarn test:lint
```

## Unit Testing

We're using [Jest](https://facebook.github.io/jest/) to write unit and integration tests for our components. 

### Running Tests

To run the unit tests you can run:

```bash
yarn test:unit
```

### Integration Tests

Each file inside the `/test/unit` folder will be loaded as a test by the Jest test runner. Have a look at the [docs](https://facebook.github.io/jest/docs) for more information.

## End to End Testing

We're using [Cypress](https://cypress.io/) to write end to end tests.

### Running Tests

To run the e2e tests you can run (you'll need to run a test server first):

```bash
# Run Cypress UI in development:
yarn start:test 

# Run e2e tests programmatically:
yarn test:e2e
```

### Writing Tests

Each file inside the `/test/e2e/integration` folder will be loaded as a test by the Cypress test runner. You can edit cypress.json for more fine-grained configuration—take a look at [the docs](https://docs.cypress.io/) for more information.

