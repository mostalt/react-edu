import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

  render() {

    const { articles, toggleItem, isItemOpen } = this.props
    
    const articleComponents = articles.map(
      article =>
        <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {isItemOpen(article.id)}
            openArticle = {toggleItem(article.id)}
            />
        </li>
    )

    return (
      <div>
        <ul>
          {articleComponents}
        </ul>
        <Chart />
      </div>
    )
  }

}

export default accordion(ArticleList)