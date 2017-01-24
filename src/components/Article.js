import React, { Component, PropTypes } from 'react'
import Loader from './Loader'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './animate.css'
import { deleteArticle, loadArticle } from '../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {

  static propTypes = {
    article: PropTypes.object,
    isOpen: PropTypes.bool,
    openArticle: PropTypes.func
  }

  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
    username: PropTypes.string
  }
  
  componentWillReceiveProps(nextProps) {
    const { isOpen, loadArticle, article, id } = nextProps
    if(!article) return loadArticle(id)

    const { text, loading } = article
    if (isOpen && !text && !loading) loadArticle(id)
  }

  componentDidMount() {
    const { isOpen, loadArticle, article, id } = this.props
    if(!article) return loadArticle(id)

    const { text, loading } = article
    if (isOpen && !text && !loading) loadArticle(id)
  }
  

  render() {
    console.log('---', this.context)

    const { article, isOpen, openArticle } = this.props
    if (!article) return null

    const loader = article.loading ? <Loader /> : null
    const body = isOpen ? 
      <section>
        {loader}
        {article.text}
        <CommentList article = {article} ref = "commentList"/>
      </section> 
      : null

    return (
      <div>
        <h3 onClick = { openArticle } >{ article.title} </h3>
        <a href= "#" onClick = {this.handleDelete}>delete me</a>
        <CSSTransition
          component="div"
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { body }
        </CSSTransition>
      </div>
    )

  }

  handleDelete = (ev) => {
    ev.preventDefault()
    const { article, deleteArticle } = this.props
    deleteArticle(article.id)
  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default connect((state, { id }) => ({
  article: state.articles.getIn(['entities', id])
}), { deleteArticle, loadArticle }, null, { pure: false })(Article)