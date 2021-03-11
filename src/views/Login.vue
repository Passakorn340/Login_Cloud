<template>
  <div>
    <b-card>
      <img :src="photoUrl" height="200" />
      <br />
      Name : {{ name }}
      <br />
      E-mail : {{ email }}
      <br />
      <b-btn variant="danger" @click="logout">Logout</b-btn>
    </b-card>
  </div>
</template>

<script>
import { auth } from "@/main.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      photoUrl: "",
    };
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        // ให้แสดง ชื่อ email รูป
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace("/");
      }
    });
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("SignOut Complete");
          alert("SignOut Complete");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>