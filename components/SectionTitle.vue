<template>
  <div>
    <div class="text-h6 font-weight-bold text-center subTitle">
      {{ subTitle }}
    </div>
    <div class="mt-4 mb-12 text-h4 text-center title">
      {{ title }}
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subTitle: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>

<style scoped>
.subTitle {
  letter-spacing: .3rem !important;
}

.title {
  letter-spacing: .5rem !important;
}
</style>

