<template>
  <q-page>
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-tabs align="center">
        <q-tab @click="scroll('home')" label="Home"></q-tab>
        <q-tab @click="scroll('podcasts')" label="PODCASTS"></q-tab>
        <q-tab @click="scroll('workshops')" label="WORKSHOPS"></q-tab>
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
      <q-btn class="fixed-top-right" @click="$router.push('login')" flat
        >Entrar</q-btn
      >
    </q-header>

    <div class="row justify-center q-mt-xl q-mb-xl">
      <div class="col-sm-4">
        <q-img src="images/logo.webp"></q-img>
      </div>
    </div>
    <div
      class="parallax-1 pointer"
      @click="openVideoModal('https://www.youtube.com/embed/1t8mX2LS_HE')"
    >
      <div class="center">
        <q-icon name="play_circle_outline" class="s35rem"></q-icon>
      </div>
    </div>
    <div class="row justify-center q-mt-xl"></div>
    <div ref="podcasts"></div>

    <section style="height: 1000px" class="q-mt-xl">
      <div class="row justify-center">
        <p class="home-title q-mt-xl">Podcasts</p>
      </div>
      <div class="row justify-center">
        <div class="col-sm-6 q-gutter-y-lg">
          <div
            class="row text-center pointer"
            @click="
              openExternalLink(
                'https://open.spotify.com/show/5pMHkOtuB92Aa28bfpj8JF?si=yVg3jAlhRlGoB4J7_ot3Ew'
              )
            "
          >
            <div class="col-sm-4 self-center">
              <q-img src="images/spotify.webp" style="width: 50px"></q-img>
            </div>
            <div class="col-sm-4 self-center s15rem">SPOTIFY</div>
            <div class="col-sm-4 self-center">
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
            <div class="col-sm-4 self-center">
              <q-img src="images/apple.webp" style="width: 50px"></q-img>
            </div>
            <div class="col-sm-4 self-center s15rem">APPLE PODCAST</div>
            <div class="col-sm-4 self-center">
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
            <div class="col-sm-4 self-center">
              <q-img src="images/soundcloud.webp" style="width: 50px"></q-img>
            </div>
            <div class="col-sm-4 self-center s15rem">SOUND CLOUD</div>
            <div class="col-sm-4 self-center">
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
            <div class="col-sm-4 self-center">
              <q-img src="images/castbox.webp" style="width: 50px"></q-img>
            </div>
            <div class="col-sm-4 self-center s15rem">CASTBOX</div>
            <div class="col-sm-4 self-center">
              <q-icon
                name="play_circle_outline"
                class="s35rem pointer"
              ></q-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      videoId: '1t8mX2LS_HE',
      playerVars: {
        autoplay: 1,
      },
      videoModal: false,
      videoModalUrl: 'https://www.youtube.com/embed/1t8mX2LS_HE?autoplay=1',
    }
  },
  methods: {
    openVideoModal(url) {
      this.videoModal = true
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
.parallax-1 {
  /* The image used */
  background-image: url('../../public/images/introBanner.jpg');

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
</style>
