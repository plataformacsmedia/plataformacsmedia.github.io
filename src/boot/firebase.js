import Vue from 'vue'
import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDoIzYIpEZrQoYibAw7UL6dJfOvde4bwIE',
  authDomain: 'csmedia-7ba40.firebaseapp.com',
  projectId: 'csmedia-7ba40',
  storageBucket: 'csmedia-7ba40.appspot.com',
  messagingSenderId: '135921751869',
  appId: '1:135921751869:web:bcc53db0fa30bff54c5754',
  measurementId: 'G-Z7EFWXF383'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.prototype.$auth = firebase.auth
Vue.prototype.$db = firebase.firestore
