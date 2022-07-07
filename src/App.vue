<template>
  <div id="app">
    <Header />
    <router-view class="lg:container m-auto" />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/HeaderComponent.vue";
// import Footer from "@/components/FooterComponent.vue";

</script>

<style>
@import "@/assets/base.css";

#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: normal;
}

main {
  padding-top: 78px;
}
</style>
