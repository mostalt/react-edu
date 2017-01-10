import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {

  static PropTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorators
    toggleItem: PropTypes.func.isRequired,
    isItemOpen: PropTypes.func.isRequired
  }

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
      <ul>
          {articleComponents}
      </ul>
    )
  }

}

export default connect(state => {
  const { articles, filters: { selected, dateRange: { from, to } } } = state
  const articleList = Object.keys(articles).map(id => articles[id])
  const filteredArticles = articleList.filter(article => {
    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })
  return {
    articles: filteredArticles
  }
})(accordion(ArticleList))