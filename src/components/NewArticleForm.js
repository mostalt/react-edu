import React, { Component, PropTypes } from 'react'

class NewArticleForm extends Component {
  static PropTypes = {

  }

  state = {
    title: ''
  }

  handleChange = ev => {
    this.setState({
      title: ev.target.value
    })
  }

  render() {
    return (
      <div>
        new article title: <input type="text" value = {this.state.title} onChange = {this.handleChange} />
      </div>
    )
  }
}

export default NewArticleForm