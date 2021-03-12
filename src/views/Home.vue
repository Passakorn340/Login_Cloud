<template>
  <div class="container">
    <b-card>
      <b-btn variant="success" class="mr-1" @click="login">Login</b-btn>
      <b-btn variant="danger" class="ml-1" @click="logout">Logout</b-btn>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/main.js";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log(user);
          this.$router.replace("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("signOut Complete");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
