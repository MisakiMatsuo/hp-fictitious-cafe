<template>
  <v-container class="my-16">
    <SectionTitle :title="title" :sub-title="subTitle" />
    <ThreeColumns :details="details" />
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import ThreeColumns from '@/components/ThreeColumns.vue';
import { ColumnItemData } from '@/types/models/componentType';

export default Vue.extend({
  name: 'ProductItems',
  components: { SectionTitle, ThreeColumns },
  data(): ColumnItemData {
    return {
      title: '商品一覧',
      subTitle: 'Products',
      details: [
        {
          src: 'https://picsum.photos/500/300?random',
          texts: [
            'クッキー詰め合わせ',
            '2,800円'
          ],
        },
        {
          src: 'https://picsum.photos/500/300?random',
          texts: [
            '自家製プリン',
            '6個セット 2,400円',
            '※冷蔵でのお届け となります。'
          ],
        },
        {
          src: 'https://picsum.photos/500/300?random',
          texts: [
            'ベイクドチーズケーキ',
            '1ホール（直径12cm） 2,800円',
            '※冷凍でのお届け となります。'
          ],
        },
      ],
    }
  },
})
</script>
