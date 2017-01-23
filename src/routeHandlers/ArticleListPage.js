import React, {Component, PropTypes} from 'react';
import ArticlesList from '../components/ArticleList'

class ArticlesListPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>List</h3>
          <ArticlesList />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ArticlesListPage.propTypes = {

};

export default ArticlesListPage;