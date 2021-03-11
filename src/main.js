import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAonBosbdtbGu8M7of3K6TfstCSPkjRlHg",
        authDomain: "logincloud-12fa6.firebaseapp.com",
        projectId: "logincloud-12fa6",
        storageBucket: "logincloud-12fa6.appspot.com",
        messagingSenderId: "271978555144",
        appId: "1:271978555144:web:864296b416e19ad5b96ebd"
    };
    firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const auth = firebase.auth();

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");