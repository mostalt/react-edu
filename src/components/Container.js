import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm.js'
import Filter from './Filter'
import Counter from './Counter'
import store from '../store'

class Container extends Component {
  render() {

    const { articles } = this.props

    return (
      <Provider store = {store}>
        <div>
          <Counter />
          <Filter articles = {[]} />
          <ArticleList />
          <Chart />
          <NewArticleForm />
        </div>
      </Provider>
    )
  }
}

export default Container