import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import SearchPage from './components/SearchPage';
import SearchResultPage from './components/SearchResultPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={SearchPage}/>
    <Route path="/searchresult/:word" component={SearchResultPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;