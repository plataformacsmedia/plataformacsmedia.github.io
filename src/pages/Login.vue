<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg q-gutter-y-md">
      <q-input label="Email" v-model="email"></q-input>
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Senha"
        @keyup.enter="doLogin"
        @click="doLogin"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
        label="Entrar"
        class="full-width"
        color="primary"
        @click="doLogin"
      ></q-btn>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      email: null,
      password: null,
      isPwd: true,
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      admLogin: 'auth/admLogin',
      getProfile: 'auth/getProfile',
    }),
    ...mapMutations({
      setUser: 'auth/setUser',
    }),
    // TODO: retirar o loggedIn do global
    async doLogin() {
      this.$q.loading.show()
      await this.login({ email: this.email, password: this.password }).then(
        result => {
          this.$q.loading.hide()
          if (result) this.$router.push('plataforma')
        }
      )
    },
  },
}
</script>

<style></style>
