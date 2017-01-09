import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './animate.css'

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openArticle: PropTypes.func.isRequired
  }

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  handleRef(ref) {
    console.log(findDOMNode(ref));
  }


  render() {
    const { article, isOpen, openArticle } = this.props

    const body = isOpen ? 
      <section>
        { article.text }
         <CommentList ref = { this.handleRef } comments = { article.comments } />
      </section> 
      : null

    return (
      <div>
        <h3 onClick = { openArticle } >{ article.title} </h3>
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

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}