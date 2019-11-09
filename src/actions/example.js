import store from '../store'

export function greet(greeting) {
  store.dispatch({
    type: 'GREETING',
    payload: greeting
  })
}