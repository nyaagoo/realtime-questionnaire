<template lang="pug">
  .login
    h1 {{headingTitle}}
    v-btn(color="primary" @click="login()") Google Login
    v-btn(color="primary" @click="logout()") Google Login
    v-btn(color="primary" @click="loginCheck()") {{isLogin}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
import firebase from "firebase";

@Component({
  name: "login",
  components: {}
})
export default class Login extends Vue {
  headingTitle: string = "ログイン";
  isLogin = false;
  login() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    // router.push("home");
  }
  logout() {
    firebase.auth().signOut();
  }
  created() {
    firebase.auth().onAuthStateChanged(user => {
      // eslint-disable-next-line no-console
      console.log(user);
      if (user) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
}
</script>

<style lang="stylus"></style>
