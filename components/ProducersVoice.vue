<template>
  <v-container class="text-center">
    <SectionTitle :title="title" :sub-title="subTitle" />
    <div>
      <video
        autoplay
        muted
        src="static/test.mov"
        controls="controls"
        width="800" />
    </div>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';

interface ProducersVoiceData {
  title: string;
  subTitle: string;
}

export default Vue.extend({
  name: 'ProducersVoice',
  data(): ProducersVoiceData {
    return {
      title: '作り手の声',
      subTitle: 'Producer\'s Voice',
    }
  },
})
</script>

<style scoped>
.about-title {
  text-align: center;
  border: 1px solid;
  letter-spacing: .2rem !important;
  width: 50%;
}

.sub-font {
  font-size: 1.8rem;
  letter-spacing: .2rem;
}
</style>

