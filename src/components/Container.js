import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm.js'

class Container extends Component {
  render() {

    const { articles } = this.props

    return (
      <div>
        <ArticleList articles = { articles } />
        <Chart />
        <NewArticleForm />
      </div>
    )
  }
}

export default Container