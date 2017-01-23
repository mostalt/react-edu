import React, {Component} from 'react';
import Article from '../components/Article'

class ArticlePage extends Component {
  render() {
    return <Article id = {this.props.params.id} isOpen = {true} />
  }
}

export default ArticlePage;