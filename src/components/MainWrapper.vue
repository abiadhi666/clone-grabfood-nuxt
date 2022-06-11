<template>
  <div style="position: sticky">
    <div class="tabs-wrapper">
      <v-container>
        <template>
          <v-tabs show-arrows>
            <v-tabs-slider color="success"></v-tabs-slider>
            <a
              v-for="(categoryTabs, k) in category"
              :key="k"
              class="tabs-link"
              v-bind:href="'#' + categoryTabs.categoryId"
              style="color: #1ebd60 !important"
            >
              <v-tab color="success"> {{ categoryTabs.categoryName }} </v-tab>
            </a>
          </v-tabs>
        </template>
      </v-container>
    </div>
    <div class="card-menu-wrapper">
      <v-container>
        <div class="card-main" v-for="(categoryItem, i) in category" :key="i">
          <h2 class="category-name" v-text="categoryItem.categoryName"></h2>
          <v-row no-gutters :id="categoryItem.categoryId">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(categoryItemMenu, j) in categoryItem.menu"
              :key="j"
            >
              <div class="card-menu">
                <div class="card-menu-item">
                  <v-img
                    class="card-menu-image"
                    :src="categoryItemMenu.menuImg"
                    contain
                  ></v-img>
                  <div class="card-menu-info">
                    <div class="card-menu-name">
                      <div class="item-menu">
                        <h3 v-text="categoryItemMenu.menuName"></h3>
                      </div>
                      <h6>
                        {{ categoryItemMenu.menuDesc }}
                      </h6>
                    </div>
                    <div class="card-menu-action">
                      <div class="card-menu-price-discount">
                        <div class="card-menu-discount">
                          <div class="discount-box">
                            <div separator="." class="discount-text">
                              Save Rp{{
                                categoryItemMenu.menuPrice *
                                categoryItemMenu.menuDiscount
                              }}
                            </div>
                          </div>
                          <h6>
                            {{ categoryItemMenu.menuPrice }}
                          </h6>
                        </div>
                        <div class="card-menu-price">
                          <div class="discounted-price">
                            {{
                              categoryItemMenu.menuPrice -
                              categoryItemMenu.menuPrice *
                                categoryItemMenu.menuDiscount
                            }}
                          </div>
                        </div>
                      </div>
                      <div class="card-menu-button">
                        <div class="btn-plus"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="note-bottom">
          <span>
            We're always working to get the most accurate information.
            <a href="https://help.grab.com/hc/en-id/360000180447-Report-incorrect-restaurant-information">Let us know</a>
            if you come across anything that's outdated!
          </span>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",

  data: () => ({
    category: [
      {
        categoryName: "Today's Offer",
        categoryId: "today",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Hijau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
        ],
      },
      {
        categoryName: "WAIKI Rice Box",
        categoryId: "waiki",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
      {
        categoryName: "New Seafood Dish",
        categoryId: "seafood",
        menu: [
          {
            menuName: "Seo Goo Kerang Hijau",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
      {
        categoryName: "Today's Offer",
        categoryId: "today",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Hijau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
        ],
      },
      {
        categoryName: "WAIKI Rice Box",
        categoryId: "waiki",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
      {
        categoryName: "New Seafood Dish",
        categoryId: "seafood",
        menu: [
          {
            menuName: "Seo Goo Kerang Hijau",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
      {
        categoryName: "Today's Offer",
        categoryId: "today",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Hijau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuDiscount: 10 / 100,
            menuPrice: 24500,
          },
        ],
      },
      {
        categoryName: "WAIKI Rice Box",
        categoryId: "waiki",
        menu: [
          {
            menuName: "Chicken Pop Barbeque & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Teriyaki & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Chicken Pop Salted Egg & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Chicken Pop Black Pepper & Veggie - Rice Box",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220126140536016410/detail/afcd0975_3c568fd9625.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
      {
        categoryName: "New Seafood Dish",
        categoryId: "seafood",
        menu: [
          {
            menuName: "Seo Goo Kerang Hijau",
            menuDesc:
              "Nasi Kerang Hijau Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092743011682/detail/90342a6c_9401563829c4.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kerang Dara",
            menuDesc:
              "Nasi Kerang Dara Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092846015869/detail/464d9ed2_c311d1a0d09d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Cumi Black Campaign",
            menuDesc:
              "Nasi Cumi Hitam Khas Madura dan Kerang hijau dengan taburan teri medan",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092938055890/detail/55d9255d_f5f2b3331e9.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Seo Goo Baby Crab Crispy Saus",
            menuDesc:
              "Nasi dan Baby Crab Crispy Masak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608092949018324/detail/d356dd94_676539d5e279.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
          {
            menuName: "Seo Goo Kepiting Bakau",
            menuDesc:
              "Nasi dan Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093003019474/detail/8e9a3648_343dd828d30.webp",
            menuDiscount: 10 / 100,
            menuPrice: 25500,
          },
          {
            menuName: "Duo Kepiting Bakau",
            menuDesc:
              "Dua Kepiting Bakau ukuran Sedang dimasak Saus Padang/Black Pepper/Asam Manis",
            menuImg:
              "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE20220608093016026496/detail/9be69f8a_973462511b1d.webp",
            menuDiscount: 10 / 100,
            menuPrice: 23500,
          },
        ],
      },
    ],
  }),
};
</script>

<style>
@import "~/src/styles/styles.scss";
@import "~/src/styles/mainwrapper.scss";
</style>
