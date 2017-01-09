import React, { Component as ReactComponent} from 'react'

export default function toggleOpen(Component) {
  return class AccordionDecorator extends React.Component {

    state = {
      openItemId: null
    }

    toggleItem = id => ev => {
      this.setState({
        openItemId: this.isItemOpen(id) ? null : id
      })
    }

    isItemOpen = id => this.state.openItemId == id

    render() {
      return <Component {...this.props} toggleItem = {this.toggleItem} isItemOpen = {this.isItemOpen} />
    }
  }
}