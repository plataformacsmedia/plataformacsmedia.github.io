<template>
  <q-page class="q-pa-md">
    <div class="s2rem">{{ course.name }}</div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      course: {},
      teste: 'teste',
    }
  },
  async created() {
    console.log(this.$route.params.slug)
    // let course
    const slug = this.$route.params.slug
    console.log(slug)
    // await this.$db()
    //   .collection('cursos')
    //   .where('slug', '==', slug)
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(function (doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       course = doc.data()
    //     })
    //   })
    // this.course = course
    // console.log('cursooooo', this.course)
  },
}
</script>

<style></style>
