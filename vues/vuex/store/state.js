// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const STORAGE_KEY = 'todos-vuejs'

export const state = {
  todos: []
}
