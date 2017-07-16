import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};

//DEVELOPMENT MOD
//node_modules/.bin/webpack
//node_modules/.bin/babel-node --presets react,es2015 src/server.js

//PRODUCTION MODE
//NODE_ENV=production node_modules/.bin/webpack -p
//NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js