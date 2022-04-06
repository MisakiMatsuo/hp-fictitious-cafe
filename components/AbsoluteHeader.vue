<template>
  <div>
    <div class="px-8 py-4 text-body-2 text-right">{{ title }}</div>
    <v-container>
      <v-row class="mb-8">
        <v-col cols="2">
          <div class="logo">
            <nuxt-link to="/" class="logo-link black--text">
              <div class="py-4 text-h2 font-weight-bold main-logo">
                {{ logo.main }}
              </div>
              <div class="px-4 py-1 d-inline-block font-weight-bold shop-logo">
                {{ logo.sub }}
              </div>
            </nuxt-link>
          </div>
        </v-col>
        <v-spacer />
        <v-col cols="5" class="d-flex justify-end align-center">
          <v-btn :ripple="false" icon x-large color="black" class="active-el">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn :ripple="false" icon x-large color="black" class="active-el">
            <v-icon>mdi-email-outline</v-icon>
          </v-btn>
          <v-btn large tile dark color="black" class="ml-7">
            <v-icon>mdi-cart-outline</v-icon>
            <span class="pl-2 pr-4 text-body-1 font-weight-bold">通販サイトはこちら</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-tabs  height="80" class="d-flex justify-center black--text">
        <v-tab
          v-for="(menu, index) of menus"
          :key="`menu-${index}`"
          :ripple="false"
          class="pa-0 d-block black--text active-el align-center"
          :to="menu.to"
        >
          <v-img :src="tabImg" min-width="130px" max-width="150px">
            <div class="pt-3 text-body-1 font-weight-bold menu-en">{{ menu.title }}</div>
            <div><small>{{ menu.subTitle }}</small></div>
          </v-img>
        </v-tab>
        <v-tabs-slider color="black" />
      </v-tabs>
    </v-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

interface AbsoluteHeaderData {
  title: string;
  logo: {
    main: string;
    sub: string;
  };
  menus: {
    title: string;
    subTitle: string;
    to: string;
  }[];
  tabImg: string;
}

export default Vue.extend({
  name: 'AbsoluteHeader',
  data(): AbsoluteHeaderData {
    return {
      title: 'sample CAFE・サンプルカフェ｜東京・日暮里のカフェスイーツをお取り寄せ',
      logo: {
        main: 'sample CAFE',
        sub: 'Online Shop',
      },
      menus: [
        {
          title: 'Top',
          subTitle: 'トップ',
          to: '#main',
        },
        {
          title: 'Feature',
          subTitle: '3つのこだわり',
          to: '#shopCommitment',
        },
        {
          title: 'Pick Up',
          subTitle: 'おすすめ商品',
          to: '#pickUp',
        },
        {
          title: 'Products',
          subTitle: '商品一覧',
          to: '#products',
        },
        {
          title: 'Payment',
          subTitle: '送料・お支払い',
          to: '#payment',
        },
        {
          title: 'Shop',
          subTitle: '店舗情報',
          to: '#shopInfo',
        },
      ],
      tabImg: require('~/static/groovepaper.png'),
    }
  },
})
</script>

<style scoped>
.logo-link {
  text-decoration: none;
}

.logo {
  position: relative;
}

.main-logo {
  font-family: cursive !important;
  /* stylelint-disable */
  background: -webkit-linear-gradient(-45deg, #F7DE05, #DA8E00, #EDAC06, #F7DE05, #ECB802, #DAAF08, #B67B03, #DA8E00, #EDAC06, #F7DE05, #ECB802, #EDAC06);
  background-clip: text;
  color: transparent;
}

.shop-logo {
  color: white;
  font-size: 0.6rem;
  letter-spacing: .2rem;
  background: black;
  position: absolute;
  bottom: -10px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

.active-el {
  text-transform: none;
}

.active-el::before {
  background-color: transparent;
}

.menu-en {
  letter-spacing: .2rem !important;
}
</style>

