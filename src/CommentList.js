import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array
  }

  state = {
    isOpen: false
  }

  render() {

    const { comments } = this.props
    const { isOpen } = this.state

    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(
      comment =>
        <li key ={comment.id} >
          <Comment comment={comment} />
        </li>
    )

    const text = isOpen ? 'hide comment' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
      <div>
        <a href="#" onClick= { this.toggleOpen }>{text}</a>
        {body}
      </div>
    )

  }

  toggleOpen = ev => {
    ev.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}