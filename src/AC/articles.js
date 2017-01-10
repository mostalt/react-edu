import { DELETE_ARTICLE } from '../constans'

export function deleteArticle(id) {
  return {
      type: DELETE_ARTICLE,
      payload: { id }
  }
}