<template>
  <v-container>
    <SectionTitle :title="title" :sub-title="subTitle" />
    <v-row justify="center" class="px-10">
      <v-col
        v-for="(column, index) of columns"
        :key="`detail-${index}`"
        cols="4"
        class="pa-5"
      >
        <v-img
          :src="column.src"
          aspect-ratio="1"
          gradient="to top right, rgba(100,115,201,.4), rgba(25,32,72,.9)"
          class="column-img"
        >
          <div class="text-center column-detail">
            <div class="mb-1 text-h6 column-title">
              {{ column.title }}
            </div>
            <div>
              <v-icon color="white">mdi-arrow-right</v-icon>
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';

interface PaymentInfoData {
  title: string;
  subTitle: string;
  columns: {
    src: string;
    title: string;
  }[];
}

export default Vue.extend({
  name: 'PaymentInfo',
  data(): PaymentInfoData {
    return {
      title: '送料・お支払い',
      subTitle: 'Information',
      columns: [
        {
          src: 'https://picsum.photos/500/200?random',
          title: 'プライバシーポリシー',
        },
        {
          src: 'https://picsum.photos/500/200?random',
          title: 'お支払い',
        },
        {
          src: 'https://picsum.photos/500/200?random',
          title: '特定商取引法に基づく表記',
        },
      ],
    }
  },
})
</script>

<style scoped>
.column-img {
  position: relative;

}

.column-title {
  color: white;
  letter-spacing: .2rem !important;
}

.column-detail {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
