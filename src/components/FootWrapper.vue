<template>
  <div class="foot-wrapper">
    <v-container>
      <div class="foot-logo">
        <v-img
          class="img-foot"
          src="https://food.grab.com/static/images/logo-grabfood-mono.svg"
          contain
        ></v-img>
      </div>
      <v-divider class="mt-6"></v-divider>
      <v-row no-gutters>
        <v-col cols="12" md="3">
          <div class="foot-header">Frequently Searched</div>
          <ul class="foot-list">
            <li>
              <a href="#"> Burger King Menu </a>
            </li>
            <li>
              <a href="#">Chatime Menu</a>
            </li>
            <li>
              <a href="#">Domino's Pizza Menu</a>
            </li>
            <li>
              <a href="#">Hokben Menu</a>
            </li>
            <li>
              <a href="#">JCO Delivery</a>
            </li>
            <li>
              <a href="#">KFC Menu</a>
            </li>
            <li>
              <a href="#">McDonalds Menu</a>
            </li>
            <li>
              <a href="#">Pizza Hut Delivery</a>
            </li>
            <li>
              <a href="#">Richeese Menu</a>
            </li>
            <li>
              <a href="#">Menu Solaria</a>
            </li>
            <li>
              <a href="#">Starbucks Menu</a>
            </li>
            <li>
              <a href="#">Yoshinoya Menu</a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <div class="foot-header">Popular Cuisines</div>
          <ul class="foot-list">
            <li>
              <a href="#">Chinese Food</a>
            </li>
            <li>
              <a href="#">Fast Food</a>
            </li>
            <li>
              <a href="#">Indian Food</a>
            </li>
            <li>
              <a href="#">Indonesian Food</a>
            </li>
            <li>
              <a href="#">Italian Food</a>
            </li>
            <li>
              <a href="#">Japanese Food</a>
            </li>
            <li>
              <a href="#">Korean Food</a>
            </li>
            <li>
              <a href="#">Thai Food</a>
            </li>
            <li>
              <a href="#">Vietnamese Food</a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <div class="foot-header">About Grab</div>
          <ul class="foot-list">
            <li>
              <a href="#">About Grab</a>
            </li>
            <li>
              <a href="#">About GrabFood</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <div class="foot-header">Support</div>
          <ul class="foot-list">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Be a GrabFood Merchant</a>
            </li>
            <li>
              <a href="#">Drive With Grab</a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FootWrapper",

  data: () => ({}),
};
</script>

<style>
@import "~/src/styles/styles.scss";
@import "~/src/styles/footwrapper.scss";
</style>
