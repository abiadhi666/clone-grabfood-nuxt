<template>
  <div class="header-main">
    <div class="header-wrapper">
      <v-container grid-list-xs>
        <v-app-bar
          class="appbar-wrapper"
          color="white"
          light
          flat
          style="flex-wrap: nowrap"
        >
          <a
            href="https://food.grab.com/id/en/"
            class="logo flex-grow-0 flex-shrink-0"
          >
            <v-img
              :src="require('../assets/logo-grabfood2.svg')"
              contain
              class="img-logo"
            ></v-img>
          </a>
          <div class="flex-grow-1 flex-shrink-0 desktop">
            <div class="input-search">
              <v-text-field
                color="success"
                dense
                outlined
                placeholder="Type your location"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>
            </div>
          </div>
          <div class="flex-grow-0 flex-shrink-0 d-flex flex-row">
            <div class="btn-group btn-cart">
              <a class="btn">
                <v-img
                  :src="require('../assets/icon-cart-default-black.svg')"
                  contain
                  width="16"
                  height="16"
                ></v-img>
              </a>
            </div>
            <div class="btn-group btn-login">
              <a class="btn">Login/Sign Up</a>
            </div>
          </div>
        </v-app-bar>
      </v-container>
    </div>
    <div class="mobile">
      <div class="input-search">
        <v-text-field
          color="success"
          dense
          outlined
          placeholder="Type your location"
          prepend-inner-icon="mdi-map-marker"
          class="input-search-item"
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWrapper",

  data: () => ({}),
};
</script>

<style>
@import "~/src/styles/styles.scss";
@import "~/src/styles/headerwrapper.scss";
</style>
