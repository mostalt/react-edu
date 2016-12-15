import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

function CommentList(props) {

    const { comments, isOpen, toggleOpen } = props

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
        <a href="#" onClick= {toggleOpen}>{text}</a>
        {body}
      </div>
    )

}

CommentList.PropTypes = {
  comments: PropTypes.array
}

export default toggleOpen(CommentList)