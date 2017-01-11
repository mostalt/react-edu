import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Loader from './Loader'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'

class ArticleList extends Component {

  static PropTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorators
    toggleItem: PropTypes.func.isRequired,
    isItemOpen: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { loadAllArticles, loaded, loading } = this.props
    if (!loaded && !loading) loadAllArticles()
  }

  render() {

    const { articles, loading, toggleItem, isItemOpen } = this.props

    if (loading) return <Loader />

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
  const { articles, filters } = state
  const articleList = Object.keys(articles).map(id => articles[id])
  const selected = filters.get('selected')
  const { from, to } = filters.get('dateRange')

  const articleArray = articles.get('entities').valueSeq().toArray()
  const filteredArticles = articleArray.filter(article => {
    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })
  return {
    articles: filteredArticles,
    loading: articles.get('loading'),
    loaded: articles.get('loaded')
  }
}, { loadAllArticles })(accordion(ArticleList))