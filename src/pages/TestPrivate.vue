<template>
  <q-page-container>
    <div class="text-right q-mt-md q-mr-md fixed">
      <q-btn flat color="primary">Entrar</q-btn>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <q-img src="images/logo.webp"></q-img>
      </div>
    </div>
    <q-page class="flex flex-center">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied"
      >
      </video-player>
    </q-page>
  </q-page-container>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'PageIndex',
  components: {
    videoPlayer,
  },
  data() {
    return {
      playerOptions: {
        height: '360',
        autoplay: true,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: 'https://www.youtube.com/watch?v=1t8mX2LS_HE&feature=emb_logo',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },
        ],
        poster:
          'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
      },
    }
  },
  methods: {
    onPlayerPlay(event) {},
    onPlayerPause(event) {},
    onPlayerEnded(event) {},
    onPlayerWaiting(event) {},
    onPlayerPlaying(event) {},
    onPlayerLoadeddata(event) {},
    onPlayerTimeupdate(event) {},
    onPlayerCanplay(event) {},
    onPlayerCanplaythrough(event) {},
    playerStateChanged(event) {},
    playerReadied(player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },
  },
}
</script>
<style scoped>
.fixed {
  position: fixed;
}
</style>
