export const filters = () => {
  return {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
  }
}

export const todos = state => {
  return state.todos
}

export const allChecked = state => {
  return state.todos.every(todo => todo.done)
}

export const remaining = state => {
  return state.todos.filter(todo => !todo.done).length
}

export const filteredTodos = (state, getters) => visibility => {
  return getters.filters[visibility](state.todos)
}
