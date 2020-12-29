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
      content-class="bg-primary"
      :width="200"
    >
      <q-list>
        <q-item-label header class="bg-grey-1 text-black">
          Meus Cursos
        </q-item-label>
        <q-item
          v-for="(course, key) in userCourses"
          clickable
          :to="`/plataforma/curso/${course.slug}`"
          :key="key"
        >
          <q-item-section>
            <q-item-label>{{ course.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="q-mt-md">
        <q-item-label header class="bg-grey-1 text-black">
          Outros Cursos
        </q-item-label>
        <q-item
          v-for="(course, key) in otherCourses"
          clickable
          :to="`/plataforma/curso/${course.slug}`"
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
      userCourses: [],
      otherCourses: [],
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
    const otherCourses = []
    const userCourses = []
    await this.$db()
      .collection('users')
      .where('uuid', '==', localStorage.getItem('csm-user-uuid'))
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const courses = doc.data().courses
          // doc.data() is never undefined for query doc snapshots
          courses.map(course => {
            userCourses.push(course)
          })
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
    await this.$db()
      .collection('cursos')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          otherCourses.push(doc.data())
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })

    this.courses = otherCourses.map(course => {
      console.log(course.docRef)
      if (userCourses.find(x => x === course.docRef)) {
        console.log('achou')
        this.userCourses.push(course)
      } else this.otherCourses.push(course)
    })

    this.$q.loading.hide()
  },
}
</script>
