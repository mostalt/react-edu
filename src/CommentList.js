import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  state = {
    isOpen: false
  }

  render() {

    const { comments } = this.props
    const { isOpen } = this.state

    console.log(comments);

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
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}