import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './animate.css'
import { deleteArticle } from '../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openArticle: PropTypes.func.isRequired
  }


  render() {
    const { article, isOpen, openArticle } = this.props

    const body = isOpen ? 
      <section>
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

export default connect(null, { deleteArticle })(Article)