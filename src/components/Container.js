import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm.js'
import Filter from './Filter'
import Counter from './Counter'

class Container extends Component {
  render() {

    const { articles } = this.props

    return (
      <div>
        <Counter />
        <Filter articles = {[]} />
        <ArticleList />
        <Chart />
        <NewArticleForm />
      </div>
    )
  }
}

export default Container