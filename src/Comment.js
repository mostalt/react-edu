import React from 'react'

export default (props) => {
  const { user, text } = props.comment
  
  return (
    <p>
      {text} <strong>by {user}</strong>
    </p>
  )
}