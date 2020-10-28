import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/tailwind.css";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

createApp(App).use(router).mount('#app')

var firebaseConfig = {
    apiKey: "AIzaSyBPF_lRfY-lJBxdJkpgyRB3O36hoP-3LVs",
    authDomain: "scaffold-vue-firebase-tailwind.firebaseapp.com",
    databaseURL: "https://scaffold-vue-firebase-tailwind.firebaseio.com",
    projectId: "scaffold-vue-firebase-tailwind",
    storageBucket: "scaffold-vue-firebase-tailwind.appspot.com",
    messagingSenderId: "888978309968",
    appId: "1:888978309968:web:73e80e5ccd649dbc6e6255"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage=firebaseApp.storage();

/* const messaging =firebase.messaging();

messaging.getToken()
    .then(currenToken=>console.log(currenToken))
    .catch(e=>console.log(e)) */

export { db, firebaseApp, storage};
