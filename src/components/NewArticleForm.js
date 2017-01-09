import React, { Component, PropTypes } from 'react'

class NewArticleForm extends Component {
  static PropTypes = {

  }

  render() {
    return (
      <div>
        new article title: <input type="text" />
      </div>
    )
  }
}

export default NewArticleForm