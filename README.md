# preact-styled-boilerplate

## Documentation
- This is the styled template for [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template
- This template is the styled-components version of the default template for preact cli

## Usage

``` bash
$ npm install -g preact-cli
$ preact create SaraVieira/styled my-project
$ cd my-project
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the styled port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm run start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. defaults to `dev server`

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass JavaScript files using ESLint

- `npm run test`: Run Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy) for your tests

### How to Test

The `styled` template provides a basic test setup with Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy). You are free to change preact-render-spy with any other assertion library. The advantage of it is that it supports a similiar terminology and feature set as the Enzyme library for testing React applications.

You can run all additional Jest CLI commands with the `npm run test` command as described in the [Jest docs](https://facebook.github.io/jest/docs/en/cli.html#using-with-npm-scripts). For example, running jest in watch mode would be :

- `npm run test -- --watch` instead of  `jest --watch `

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `preact-cli`:

``` bash
preact create username/repo my-project
```
