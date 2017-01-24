import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'
import NewArticleForm from './components/NewArticleForm.js'
import Filter from './components/Filter'
import Counter from './components/Counter'
import ArticleList from './routeHandlers/ArticleListPage'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import CommentsRoot from './routeHandlers/CommentsRoot'
import CommentsPage from './routeHandlers/CommentsPage'
import ArticleIndexPage from './routeHandlers/ArticleIndexPage'

export default <Router history={browserHistory}>
  <Route path = "/" component = {Container}>
    <IndexRedirect to = "/articles" />
    <Redirect from = "article" to = "articles" />
    <Route path = "articles" component = {ArticleList}>
      <IndexRoute component = {ArticleIndexPage} />
      <Route path = "new" component = {NewArticleForm} />
      <Route path = ":id" component = {ArticlePage}/>
    </Route>
    <Route path = "/filter" component={Filter} />
    <Route path = "comments" component = {CommentsRoot}>
      <IndexRedirect to = "1" />
      <Route path = ":page" component = {CommentsPage} />
    </Route>
    <Route path = "*" component = {NotFoundPage} />
  </Route>
</Router>