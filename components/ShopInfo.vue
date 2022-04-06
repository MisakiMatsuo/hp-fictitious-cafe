<template>
  <div class="my-16">
    <SectionTitle :title="title" :sub-title="subTitle" />
    <v-row class="my-10">
      <v-col cols="6" class="pa-0">
        <div class="mr-8 d-flex flex-column align-end">
          <v-list-item
            v-for="(detail, index) of details"
            :key="`detail-${index}`"
            class="py-3 list"
          >
            <v-row>
              <v-col cols="3" class="px-0 d-flex align-center">
                <div class="text-subtitle-1">{{ detail.item }}</div>
              </v-col>
              <v-col cols="9" class="pr-0">
                <div
                  v-for="(text, i) of detail.texts"
                  :key="`text-${i}`"
                  class="text-body-1"
                >
                  <span :class="isStyle(index, i)">{{ text }}</span>
                </div>
              </v-col>
            </v-row>
          </v-list-item>
        </div>
      </v-col>
      <v-col cols="6" class="pa-0">
        <v-img :src="img.src" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

interface ShopInfoData {
  img: {
    src: string;
  };
  title: string;
  subTitle: string;
  details: {
    item: string;
    texts: string[];
  }[];
}

export default Vue.extend({
  name: 'ShopInfo',
  components: { SectionTitle },
  data(): ShopInfoData {
    return {
      img: {
        src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
      },
      title: '店舗について',
      subTitle: 'Shop',
      details: [
        {
          item: '店舗',
          texts: [ '荒川区・日暮里のカフェスイーツなら', 'sample CAFE（サンプル カフェ）' ],
        },
        {
          item: 'お問い合わせ',
          texts: [
            '03-0000-0000',
            'ホームページを見たとお伝えいただけるとスムーズです。'
          ],
        },
        {
          item: '住所',
          texts: [ '〒000-0000', '東京都荒川区日暮里0-00-0 〇〇ビル 1F' ],
        },
        {
          item: '営業時間',
          texts: [
            '11:30～17:00（L.O.16:00）',
            '※新型コロナウイルス感染拡大により、営業時間が変更する場合がございます。'
          ],
        },
        {
          item: '定休日',
          texts: [ '不定休' ],
        },
        {
          item: 'アクセス',
          texts: [ 'JR他各線「日暮里駅」X番出口より徒歩10分' ],
        },
        {
          item: '総席数',
          texts: [ '14席（テーブル 10席（2名様×5卓）、カウンター 4席）' ],
        },
        {
          item: '貸切',
          texts: [ '不可' ],
        },
        {
          item: 'クレジットカード',
          texts: [ '可（VISA, Master, AMEX, JCB, Diners）' ],
        },
        {
          item: '電子マネー',
          texts: [ '可（交通系電子マネー, PayPay）' ],
        },
      ],
    }
  },
  methods: {
    isStyle(index: number, i: number) {
      if(index !== 1) {
        return;
      }
      if(i === 0) {
        return 'text-h4 font-weight-bold';
      } else  {
        return 'text-caption';
      }
    }
  },
})
</script>

<style scoped>
.list {
  border-bottom: 1px solid #333;
  width: 550px;
}

.v-list-item__title, .v-list-item__subtitle {
  white-space: normal;
}
</style>

