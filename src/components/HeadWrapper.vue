<template>
  <div>
    <v-img
      class="img-hero mobile"
      src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2XDGABBT3BYGT/hero/03c7f74481b8467eaee275265311a7bb_1628499015316487688.png"
      contain
    ></v-img>
    <v-container grid-list-xs>
      <div class="head-wrapper">
        <v-breadcrumbs :items="itemsBreadcrumb">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <div class="preferred-merchant">
          <v-img
            :src="require('../assets/icon-preferred-merchant.svg')"
            contain
            width="16"
            height="18"
          ></v-img>
          <p>Preferred Merchant</p>
        </div>
        <h1 class="title-menu">Do Yan Seafood - Sumbersekar</h1>
        <h3 class="subtitle">Seafood,Snack</h3>
        <div class="rating-distance">
          <div class="rating-wrapper">
            <v-img :src="require('../assets/icon-star.svg')" contain></v-img>
            <div class="rating-text">4.5</div>
          </div>
          <div class="distance-wrapper">
            <div class="distance-text">662.9 km</div>
          </div>
        </div>
        <div class="open-hours-wrapper">
          <label class="open-hours" for="opening-hours">Opening Hours</label>
          <div class="opening-hours" name="opening-hours">
            Today&nbsp;&nbsp;Closed
          </div>
          <div class="closed">Closed</div>
        </div>
        <div class="promo-wrapper">
          <div>
            <div class="promo-item">
              <v-img
                :src="require('../assets/icon-promo-tag.svg')"
                contain
              ></v-img>
              <div class="promo-name">10% off WAIKI Rice Box</div>
            </div>
            <div class="promo-item">
              <v-img
                :src="require('../assets/icon-promo-tag.svg')"
                contain
              ></v-img>
              <div class="promo-name">15% off Seo Goo Kerang Dara</div>
            </div>
          </div>
          <div class="modal-promo">
            <v-dialog v-model="dialog" persistent>
              <template v-slot:activator="{ on, attrs }">
                <a plain v-bind="attrs" v-on="on">See 7 More</a>
              </template>
              <v-card>
                <div class="modal-title">
                  <h3>Promotions</h3>
                  <v-img
                    :src="require('../assets/icon-promo-tag.svg')"
                    contain
                  ></v-img>
                </div>
                <div class="modal-body">
                  <div
                    class="modal-promo-item"
                    v-for="(itemModalPromo, i) in itemsModalPromo"
                    :key="i"
                  >
                    <h4 v-text="itemModalPromo.title"></h4>
                    <div v-text="itemModalPromo.descFirst" class="desc"></div>
                    <div v-text="itemModalPromo.descSecond" class="desc"></div>
                    <div v-text="itemModalPromo.descThird" class="desc"></div>
                    <div v-text="itemModalPromo.descFourth" class="desc"></div>
                  </div>
                </div>
                <div class="btn-close">
                  <v-btn icon plain @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <div class="order-fee">
          <v-img :src="require('../assets/icon-info.svg')" contain></v-img>
          <div class="promo-name">
            Order fee of Rp3.000 applies for this restaurant.
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeadWrapper",

  data: () => ({
    dialog: false,
    itemsBreadcrumb: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Restaurant",
        disabled: false,
        href: "https://food.grab.com/id/en/restaurants",
      },
      {
        text: "Do Yan Seafood - Sumbersekar",
        disabled: true,
      },
    ],
    itemsModalPromo: [
      {
        title: "10% off WAIKI Rice Box",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "15% off Seo Goo Kerang Dara",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "15% off Seo Goo Cumi Black Campaign",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "15% off Seo Goo Kepiting Bakau",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "10% off Seo Goo Baby Crab Crispy Saus",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "10% off Duo Kepiting Bakau",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "Rp2.000 off delivery fee with Rp30.000 min. order",
        descFirst: "• Available at selected outlets",
        descSecond: "• Minimum order of Rp30.000",
        descThird: "• Discount capped at Rp2.000",
        descFourth: "• Valid 2022-06-02 11:30 to 2022-06-12 23:30",
      },
      {
        title: "Rp9.800 off Seo Goo Kerang Hijau",
        descFirst: "• Available at selected outlets",
        descSecond: "• Valid 2022-06-08 18:00 to 2022-06-30 23:00",
      },
      {
        title: "PASTIDISKONG 20rb | HEMAT35GT 35% | HEMAT30GT 30%",
      },
    ],
  }),
};
</script>

<style>
@import "~/src/styles/styles.scss";
@import "~/src/styles/headwrapper.scss";
</style>
