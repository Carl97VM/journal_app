
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const myCustomModule = {
    namespace: true,
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state,
}

export default myCustomModule 