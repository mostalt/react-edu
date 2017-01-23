import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Container from './components/Container'
import NewArticleForm from './components/NewArticleForm.js'
import Filter from './components/Filter'
import Counter from './components/Counter'
import ArticleList from './routeHandlers/ArticleListPage'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import CommentsRoot from './routeHandlers/CommentsRoot'
import CommentsPage from './routeHandlers/CommentsPage'

export default <Router history={browserHistory}>
  <Route path = "/" component = {Container}>
    <Route path = "articles" component = {ArticleList}>
      <Route path = "new" component = {NewArticleForm} />
      <Route path = ":id" component = {ArticlePage}/>
    </Route>
    <Route path = "/filter" component={Filter} />
    <Route path = "comments" component = {CommentsRoot}>
      <Route path = ":page" component = {CommentsPage} />
    </Route>
    <Route path = "*" component = {NotFoundPage} />
  </Route>
</Router>