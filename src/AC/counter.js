import { INCREMENT } from '../constans'

export function increment() {
  const action = {
    type: INCREMENT
  }
  return action
}