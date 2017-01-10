import { DELETE_ARTICLE } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'

export default (comments = arrayToMap(normalizedComments), action) => {
  const { type, payload } = action
  return comments
}