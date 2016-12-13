import React, { Component } from 'react'

export default class Article extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { article } = this.props
    const { isOpen } = this.state

    const body = isOpen ? <section>{ article.text }</section> : null

    return (
      <div>
        <h3 onClick = { this.toggleOpen } >{ article.title} </h3>
        { body }
      </div>
    )

  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}