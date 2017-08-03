# seslisozluk-simple-ui-project
Fast and simple seslisozluk dictionary UI. It is an example project for those who want to learn react, react-router, nodejs, axios.

Demo URL: [https://seslisozlukextention.herokuapp.com/](https://seslisozlukextention.herokuapp.com/)

Chrome Extension URL: [Sesli Sözlük Modern](https://chrome.google.com/webstore/detail/sesli-s%C3%B6zl%C3%BCk-modern/eligiblbegedpaeakkpchnjdgdlejkln)

## Getting Started
If you haven't used [webpack](https://webpack.js.org/) before, be sure to check out the [Getting Started](https://webpack.js.org/guides/getting-started/) guide, as it explains how to create a [webpack](https://webpack.js.org/guides/installation/) as well as install and how to use webpack-config. 
Once you're familiar with that process, you may install modules:

```shell
npm install
```

### Run webpack
Once the modules has been installed, webpack may be run with this line of JavaScript:

```shell
node_modules/.bin/webpack
```

### Start the project
Once the installation is done, you can run some commands inside the project folder

```shell
node_modules/.bin/babel-node --presets react,es2015 src/server.js
```
or 
```shell
node start
```

### Production Mode
In order to deploy the project into production environment, the definition("NODE_ENV=production") should be added into commands.

```shell
NODE_ENV=production node_modules/.bin/webpack -p
NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js
```

Now, you can test it on [http://localhost:3000](http://localhost:3000)
