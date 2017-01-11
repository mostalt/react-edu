import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { Record, Map } from 'immutable'

const ArticleModel = Record({
  id: null,
  date: null,
  title: "",
  text: "",
  comments: []
})

export default (articles = new Map({}), action) => {
  const { type, payload, generatedId, response } = action
  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)
    
    case ADD_COMMENT:
      return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(generatedId))
    
    case LOAD_ALL_ARTICLES:
      return articles.merge(arrayToMap(response, article => new ArticleModel(article)))

  }
  return articles
}