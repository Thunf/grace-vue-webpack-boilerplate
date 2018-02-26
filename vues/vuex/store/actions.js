import { STORAGE_KEY } from './state'

export const getStorageItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('init', {
        list: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
      })
      resolve()
    }, 1000)
  })
}
