<template lang="pug">
  .login
    h1 {{headingTitle}}
    v-btn(color="primary" @click="login()") Google Login
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({
  name: "login",
  components: {}
})
export default class Home extends Vue {
  headingTitle: string = "ログイン";
  login() {
    router.push("home");
  }
}
</script>

<style lang="stylus"></style>
