<template>
  <v-app>
    <HeaderWrapper />
    <HeadWrapper />
    <MainWrapper />
    <FootWrapper />
    <FooterWrapper />
  </v-app>
</template>

<script>
import HeaderWrapper from "./components/HeaderWrapper";
import HeadWrapper from "./components/HeadWrapper";
import MainWrapper from "./components/MainWrapper";
import FootWrapper from "./components/FootWrapper";
import FooterWrapper from "./components/FooterWrapper";

export default {
  name: "App",

  components: {
    HeaderWrapper,
    HeadWrapper,
    MainWrapper,
    FootWrapper,
    FooterWrapper,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "~/src/styles/styles.scss";
</style>
