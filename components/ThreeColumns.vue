<template>
  <v-row justify="center" class="px-10">
    <v-col
      v-for="(detail, index) of details"
      :key="`detail-${index}`"
      cols="4"
      class="pa-5"
    >
      <v-img :src="detail.src" aspect-ratio="1" />
      <div class="mt-6">
        <div
          v-for="(text, i) of detail.texts"
          :key="`text-${i}`"
          class="py-1 text-body-1 text-center detail-text"
        >
          {{ text }}
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';
import { ColumnData } from '@/types/models/componentType';

export default Vue.extend({
  name: 'ThreeColumns',
  props: {
    details: {
      type: Array as PropType<ColumnData[]>,
      default: (): ColumnData[] => [],
      required: true,
    },
  },
})
</script>

<style scoped>
.detail-text {
  letter-spacing: .2rem !important;
}
</style>
