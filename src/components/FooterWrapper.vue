<template>
  <div class="footer-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="country-title">Countries with GrabFood</div>
          <div class="country-list">
            <a href="#">Indonesia</a>
            <a href="#">Philippines</a>
            <a href="#">Thailand</a>
            <a href="#">Vietnam</a>
            <a href="#">Singapore</a>
            <a href="#">Malaysia</a>
            <a href="#" class="list-end">Myanmar</a>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="sosmed-list-wrapper">
          <ul class="sosmed-list">
            <li>
              <a href="#">
                <v-icon width="32" height="32">mdi-facebook</v-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon width="32" height="32">mdi-instagram</v-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <v-icon width="32" height="32">mdi-twitter</v-icon>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="copyright">&copy; Grab 2022</div>
          <div class="terms-privacy">
            <a href="#">Terms of Service</a>
            <span class="sparator">•</span>
            <a href="#">Privacy Policy</a>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="store-list">
            <a href="#">
              <img
                src="https://food.grab.com/static/images/logo-appstore.svg"
              />
            </a>
            <a href="#">
              <img
                src="	https://food.grab.com/static/images/logo-playstore.svg"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FooterWrapper",

  data: () => ({}),
};
</script>

<style>
@import "~/src/styles/styles.scss";
@import "~/src/styles/footerwrapper.scss";
</style>
