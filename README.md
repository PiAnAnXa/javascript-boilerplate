# javascript-boilerplate

## Editor

* [Visual Studio Code](https://code.visualstudio.com/)
* EditorConfig plugin [https://editorconfig.org](https://editorconfig.org)
  * [Plugin location](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Packet manager

* NMP part of [Node.js](https://nodejs.org)

## Webserver

* http-server

```npm
npm install http-server -g
```

## Sharing work in progress

```npm
npm install localtunnel -g
lt --port 3000 --subdomain ppf
```

## Automation

* npm scripts

## Transpilling

Transforming code to use one standard (e.g. ES6/ES2015) and producing code in another standard (e.g. ES5).

* Babel

## Bundler

* Webpack

## Linting

Check code on typos and

* ES Lint

## Testing and Continuous Integration

### Descisions

1. Testing framework
1. Assertion library
1. Helper libraries
1. Where to run tests
1. Where do test files belong
1. When should tests run

### Unit testing

Short tests of units (single funtion or module)

* Mocha

### Integration testing

Interaction between modules

### UI testing

Automate interactions with UI

## Continuous integration

When commiting code, automatically run the code on another machine, asserting it works there too.

* Travis CI (hosted)
* Appveyor (windows)
* Jenkins (host on your own)

## HTTP calls

Make HTTP request

### from server

* http
* request

### from browser

* XMLHttpRequest
* jQuery (ajax)
* fetch (What (web hypertext application technology) working group - whatwg) => using whatwg-fetch is a pollyfill

For support on different browsers

* pollyfils ([https://www.polyfill.io](https://www.polyfill.io))

### for Client and server

* isomorphic-fetch
* xhr
* Supper Agent
* Axios

### Mocking HTTP request

* Nock (Static)
* Developper Web sever
  * Static json (centralized api)
  * api-mock
  * JSON server (data is saved)
    * \+ JSON Schema faker

## Project structure

1. javascript belongs in .js files
1. Consider organizing on Features
1. Extract Logic into POJO (Plain old javascript objects)

## Searchterm for starterkits for JS

* Development environment
* Boilerplate
* Starter kit
* Starter project

## Production Deployment

* Minification
  * \+ sourcemap
* Dynamic HTML
* Cashe busting
* Bundle splitting
* Error logging

using

* webpack
