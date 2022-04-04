<template>
  <v-app dark>
    <v-app-bar
      id="header"
      ref="header"
      app
      flat
      color="white"
      height="80px"
    >
      <v-spacer />
      <template v-for="(menu, index) of menus">
        <v-tab
          :key="`btn-${index}`"
          v-ripple="false"
          class="mx-4 px-0 text-body-1 menu-btn"
          @click="gotoSelectedVendor(menu.to)"
        >
          <span class="black--text">{{ menu.title }}</span>
        </v-tab>
        <v-divider
          :key="`divider-${index}`"
          vertical
          class="mx-1 divider" />
      </template>
      <v-btn large tile dark color="black" class="ml-7">
        <v-icon>mdi-cart-outline</v-icon>&nbsp;&nbsp;通販サイト
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main class="pt-0">
      <Nuxt />
    </v-main>
    <v-footer height="220" absolute app padless>
      <v-card height="220" color="white" class="flex text-center" flat tile>
        <v-card-title class="pt-16 text-subtitle-1 d-flex justify-center footer-line">
          ©uni CAFE. All Rights Reserved.
        </v-card-title>
        <v-card-text class="pb-3">
          <nuxt-link to="" class="caption black--text privacy">
            Cookie情報等の取り扱いについて
          </nuxt-link>
        </v-card-text>
        <v-card-text class="d-flex justify-center">
          <v-btn
            v-for="(snsLink, index) of snsLinks"
            :key="`snsLink-${index}`"
            x-small
            :color="snsLink.color"
            class="mx-1 py-1 font-weight-bold sns-btn"
          >
            <a target="_blank" class="sns-link" :href="snsLink.to">
              <v-icon x-small color="white">{{ `mdi-${snsLink.icon}` }}</v-icon>
              <span class="white--text">{{ snsLink.title }}</span>
            </a>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data() {
    return {
      menus: [
        {
          title: 'トップ',
          to: '#main',
        },
        {
          title: 'こだわり',
          to: '#shopCommitment',
        },
        {
          title: 'おすすめ商品',
          to: '#pickUp',
        },
        {
          title: '商品一覧',
          to: '#products',
        },
        {
          title: '送料・お支払い',
          to: '#payment',
        },
        {
          title: '店舗情報',
          to: '#storeInfo',
        },
      ],
      snsLinks: [
        {
          title: 'Twitter',
          icon: 'twitter',
          color: '#1d9bf0',
          to: 'https://twitter.com/',
        },
        {
          title: 'Facebook',
          icon: 'facebook',
          color: '#3B5998',
          to: 'https://www.facebook.com/',
        },
        {
          title: 'LINE',
          icon: 'chat-processing',
          color: '#07c755',
          to: 'https://line.me/ja/',
        },
      ],
    }
  },
  mounted() {
    this.isShowHeader();
  },
  methods: {
    gotoSelectedVendor(id) {
      this.$vuetify.goTo(id);
    },
    isShowHeader() {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          this.$refs.header.$el.classList.add('is-show');
        } else {
          this.$refs.header.$el.classList.remove('is-show');
        }
      });
    },
  },
}
</script>

<style scoped>
#header {
  top: -80px;
}

#header.is-show {
  top: 0;
  transition: .3s;
}

.menu-btn {
  height: 80px;
}

.menu-btn:hover {
  border-bottom: 3px solid #333;
}

.menu-btn::before {
  background-color: transparent;
}

.divider {
  display: block;
  margin: auto;
}

.footer-line {
  border-top: 3px solid #333;
}

.privacy {
  text-decoration: none;
}

.sns-btn {
  font-family: sans-serif;
  text-transform: none;
}

.sns-link {
  text-decoration: none;
}

.v-divider--vertical {
  min-height: 30%;
  max-height: 30%;
}

.theme--light.v-divider {
  border-color: rgba(0 0 0 / 35%);
}
</style>
