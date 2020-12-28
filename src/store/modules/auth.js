/* eslint-disable no-unused-vars */
import { i18n } from '../../boot/i18n'
import fbErr from '../../helpers/firebase-messages'

export default {
  namespaced: true,
  state: {
    isLoggedIn: typeof window !== 'undefined'
      ? !!localStorage.getItem('csm-token') || false
      : false,
    token: typeof window !== 'undefined'
      ? localStorage.getItem('csm-token') || ''
      : ''
  },
  getters: {
    isLoggedIn: state => {
      return state.token
    }
  },

  mutations: {
    setLogin: (state, data) => {
      state.isLoggedIn = true
      localStorage.setItem('csm-token', data.token)
      localStorage.setItem('csm-user-uuid', data.uuid)
    },
    setLogoff: (state) => {
      state.isLoggedIn = false
      localStorage.removeItem('csm-token')
      localStorage.removeItem('csm-user-uuid')
    },
  },
  actions: {
    login: async function ({ dispatch, commit }, { email, password }) {
      const pass = await this._vm.$auth().signInWithEmailAndPassword(email, password).then(data => {
        const user = {
          token: data.user.refreshToken,
          uuid: data.user.uid
        }
        commit('setLogin', user)
        return true
      }).catch(error => {
        console.log('olha o erro ai', error)
        this._vm.$q.notify({
          color: 'negative',
          message: fbErr(error.code),
          classes: 't-notification'
        })
        return false
      })
      if (pass) return true
      return false
    },
    logoff: function ({ commit }) {
      commit('setLogoff')
      this.$router.push('/login')
    },
    passwordRecovery: async function ({ commit }, email) {
      return this._vm.$http.post('/password-recovery', { email })
    },
    passwordReset: async function ({ commit }, data) {
      console.log(data.token)
      return this._vm.$http.post('/password-reset', data, { headers: { Authorization: `Bearer ${data.token}` } })
    },
  }
}
