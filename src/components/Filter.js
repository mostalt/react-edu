import React, { Component, PropTypes } from 'react'
import SelectFilter from './SelectFilter'
import DatePicker from './DatePicker'

class Filter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <DatePicker />
        <SelectFilter articles = {this.props.articles} />
      </div>
    )
  }
}

export default Filter