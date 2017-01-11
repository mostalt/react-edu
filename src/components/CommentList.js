import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment } from '../AC/comments'

function CommentList(props) {

    const { article, comments, addComment, isOpen, toggleOpen } = props

    if (!comments || !comments.length) return <div>
      <p>No comments yet</p>
      <NewCommentForm articleId = {article.id} addComment = {addComment} />
    </div>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

    const text = isOpen ? 'hide comment' : `show ${comments.length} comments`
    const body = isOpen && <div>
        <ul>{commentItems}</ul>
        <NewCommentForm articleId = {article.id} addComment = {addComment} />
      </div>

    return (
      <div>
        <a href="#" onClick= {toggleOpen}>{text}</a>
        {body}
      </div>
    )

}

CommentList.PropTypes = {
  comments: PropTypes.array,
  //form toggleOpen decorators
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default connect((state, props) => ({
  comments: getRelation(props.article, 'comments', state)
}), { addComment })(toggleOpen(CommentList))