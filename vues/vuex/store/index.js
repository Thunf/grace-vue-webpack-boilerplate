import { state } from './state'
import * as actions from './actions'
import * as getters from './getters'
import { mutations } from './mutations'
import plugins from './plugins'

export default {
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  plugins,
  modules: {
    // some modules
  }
}
