import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Container from './components/Container'
import ArticleList from './components/ArticleList'
import NewArticleForm from './components/NewArticleForm.js'
import Filter from './components/Filter'
import Counter from './components/Counter'

export default <Router history={browserHistory}>
  <Route path = "/" component = {Container}>
    <Route path = "/articles" component={ArticleList} />
    <Route path = "/filter" component={Filter} />
    <Route path = "/counter" component={Counter} />
    <Route path = "/new" component={NewArticleForm} />
  </Route>
</Router>