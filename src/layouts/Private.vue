<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Area do Aluno</q-toolbar-title>
        <q-btn flat @click="logout">Sair</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      width="200"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Meus Cursos </q-item-label>
        <q-item
          v-for="(course, key) in courses"
          clickable
          tag="a"
          target="_self"
          :href="`plataforma/curso/${course.slug}`"
          :key="key"
        >
          <q-item-section>
            <q-item-label>{{ course.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      courses: [],
    }
  },
  methods: {
    ...mapActions({
      logoff: 'auth/logoff',
    }),
    async logout() {
      await this.logoff()
    },
  },
  async mounted() {
    this.$q.loading.show()
    const courses = []
    await this.$db()
      .collection('users')
      .where('uuid', '==', localStorage.getItem('csm-user-uuid'))
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          doc.data().courses.map(course => {
            courses.push(course)
          })
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
    courses.map(c => {})
    this.courses = await Promise.all(
      courses.map(async course => {
        return await this.$db()
          .collection('cursos')
          .doc(course)
          .get()
          .then(course => {
            return course.data()
          })
      })
    )
    this.$q.loading.hide()
  },
}
</script>
