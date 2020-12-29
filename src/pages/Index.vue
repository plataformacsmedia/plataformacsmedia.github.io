<template>
  <q-page>
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-tabs align="center" class="mobile-hide">
        <q-tab @click="scroll('home')" label="Home"></q-tab>
        <q-tab @click="scroll('cursos')" label="CURSOS"></q-tab>
        <q-tab @click="scroll('podcasts')" label="PODCASTS"></q-tab>
        <q-tab @click="scroll('workshops')" label="WORKSHOPS"></q-tab>
      </q-tabs>
      <q-btn class="fixed-top-right" @click="$router.push('login')" flat
        >Entrar</q-btn
      >
      <q-expansion-item
        expand-separator
        icon="menu"
        class="desktop-hide"
        style="width: 50%"
      >
        <q-list>
          <q-item>
            <p @click="scroll('home')">HOME</p>
          </q-item>
          <q-item>
            <p @click="scroll('cursos')">CURSOS</p>
          </q-item>
          <q-item>
            <p @click="scroll('podcasts')">PODCASTS</p>
          </q-item>
          <q-item>
            <p @click="scroll('workshops')">WORKSHOPS</p>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-header>
    <div
      class="parallax parallax-img-1 pointer"
      @click="openVideoModal('https://www.youtube.com/embed/1t8mX2LS_HE')"
    >
      <q-tooltip
        anchor="center middle"
        transition-show="flip-right"
        transition-hide="flip-left"
        content-class="bg-primary"
        :content-style="{ color: '#ffffff' }"
        >Clique para assistir</q-tooltip
      >
      <div class="center">
        <q-icon name="play_circle_outline" class="s35rem"></q-icon>
      </div>
    </div>
    <div ref="cursos"></div>
    <section class="q-mt-xl q-mb-xl">
      <div class="row justify-center">
        <p class="home-title q-mt-xl">CURSOS</p>
      </div>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
        height="auto"
        class="bg-secondary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          v-for="(course, key) in courses"
          :name="course.slug"
          :key="key"
          style="padding: 0px"
        >
          <div class="row">
            <div
              class="col-xs-12 col-sm-6"
              @click="openVideoModal(course.presentation)"
            >
              <!-- <q-img :src="course.cover"></q-img> -->
              <div
                class="course-cover pointer"
                :style="`background-image: url(${course.cover})`"
              >
                <q-tooltip
                  anchor="center middle"
                  transition-show="flip-right"
                  transition-hide="flip-left"
                  content-class="bg-primary"
                  :content-style="{ color: '#ffffff' }"
                  >Clique para assistir</q-tooltip
                >
                <div class="center">
                  <q-icon name="play_circle_outline" class="s35rem"></q-icon>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="q-mt-md text-center s2rem">{{ course.name }}</div>
              <div class="q-mt-md text-center s15rem">
                {{ course.description }}
              </div>
              <div class="q-mt-md text-center">
                <span class="s15rem"> R$: </span>
                <span class="s3rem">{{ course.price }}</span>
                <span class="s15rem">,00</span>
              </div>
              <div class="q-mt-xl text-center">
                <q-btn color="primary" label="COMPRAR"></q-btn>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <div ref="podcasts"></div>
    <section class="q-mt-xl q-mb-xl">
      <div class="row justify-center">
        <p class="home-title q-mt-xl">PODCASTS</p>
      </div>
      <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 q-gutter-y-lg">
          <div
            class="row text-center pointer"
            @click="
              openExternalLink(
                'https://open.spotify.com/show/5pMHkOtuB92Aa28bfpj8JF?si=yVg3jAlhRlGoB4J7_ot3Ew'
              )
            "
          >
            <div class="col-xs-4 self-center">
              <q-img src="images/spotify.png" class="img50"></q-img>
            </div>
            <div class="col-xs-4 self-center s15rem">SPOTIFY</div>
            <div class="col-xs-4 self-center">
              <q-icon
                name="play_circle_outline"
                class="s35rem pointer"
              ></q-icon>
            </div>
          </div>
          <div
            class="row text-center pointer"
            @click="
              openExternalLink(
                'https://podcasts.apple.com/br/podcast/cesar-santos/id1475752599'
              )
            "
          >
            <div class="col-xs-4 self-center">
              <q-img src="images/apple-podcasts.svg" class="img40"></q-img>
            </div>
            <div class="col-xs-4 self-center s15rem">APPLE PODCAST</div>
            <div class="col-xs-4 self-center">
              <q-icon
                name="play_circle_outline"
                class="s35rem pointer"
              ></q-icon>
            </div>
          </div>
          <div
            class="row text-center pointer"
            @click="openExternalLink('https://soundcloud.com/cesarandsantos')"
          >
            <div class="col-xs-4 self-center">
              <q-img src="images/soundcloud.png" class="img30"></q-img>
            </div>
            <div class="col-xs-4 self-center s15rem">SOUND CLOUD</div>
            <div class="col-xs-4 self-center">
              <q-icon
                name="play_circle_outline"
                class="s35rem pointer"
              ></q-icon>
            </div>
          </div>
          <div
            class="row text-center pointer"
            @click="openExternalLink('https://castbox.fm/channel/id2235467')"
          >
            <div class="col-xs-4 self-center">
              <q-img src="images/castbox.png" class="img30"></q-img>
            </div>
            <div class="col-xs-4 self-center s15rem">CASTBOX</div>
            <div class="col-xs-4 self-center">
              <q-icon
                name="play_circle_outline"
                class="s35rem pointer"
              ></q-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div ref="workshops"></div>
    <div
      class="parallax parallax-img-2 pointer"
      @click="openVideoModal('https://www.youtube.com/embed/1t8mX2LS_HE')"
    ></div>
    <section class="q-mt-xl q-mb-xl">
      <div class="row justify-center">
        <p class="home-title q-mt-xl">WORKSHOPS</p>
      </div>
    </section>
    <div style="height: 1000px"></div>
    <q-dialog v-model="videoModal">
      <div style="max-width: 80%">
        <div class="q-video video">
          <iframe
            width="560"
            height="315"
            :src="videoModalUrl"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
// import { Youtube } from 'vue-youtube'
export default {
  name: 'PageIndex',
  components: {
    // Youtube,
  },
  data() {
    return {
      slide: 'harmonia',
      videoId: '1t8mX2LS_HE',
      courses: [],
      playerVars: {
        autoplay: 1,
      },
      videoModal: false,
      videoModalUrl: null,
    }
  },
  methods: {
    openVideoModal(url) {
      console.log(url)
      this.videoModal = true
      this.videoModalUrl = url
    },
    playing() {
      console.log('o/ we are watching!!!')
    },
    scroll(element) {
      if (element === 'home') {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      } else {
        const el = this.$refs[element]
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    openExternalLink(url) {
      window.open(url, '_blank')
    },
  },
  async mounted() {
    await this.$db()
      .collection('cursos')
      .get()
      .then(documents => {
        documents.forEach(element => {
          console.log(element.data())
          this.courses.push(element.data())
        })
      })
  },
}
</script>
<style scoped>
.fixed-top-right {
  position: fixed;
  top: 5px;
  right: 10px;
}
.fixed {
  position: fixed;
}
.parallax {
  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.parallax-img-1 {
  /* The image used */
  background-image: url('../../public/images/introBanner.jpg');
}
.parallax-img-2 {
  /* The image used */
  background-image: url('../../public/images/workshopsBanner.jpg');
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.video {
  width: 960px;
  height: 540px;
}
.course-cover {
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
