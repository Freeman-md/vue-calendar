import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyBb6X_ZFXnEejdoGwhtiWUROmy7tImnbfg",
    authDomain: "vue-calendar-ec050.firebaseapp.com",
    projectId: "vue-calendar-ec050",
    storageBucket: "vue-calendar-ec050.appspot.com",
    messagingSenderId: "1056247795237",
    appId: "1:1056247795237:web:9701650afefb345f53b9cc"
})

export const db = firebase.firestore()

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')