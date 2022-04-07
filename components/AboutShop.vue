<template>
  <div class="parallax">
    <v-container>
      <v-row justify="center" align="center" class="pt-16 px-10">
        <v-spacer />
        <v-col cols="12" sm="7" class="pa-0">
          <div class="mb-6">
            <div class="py-1 mx-auto mb-6 text-h6 about-title">
              {{ title }}
            </div>
            <template v-for="(subTitle, index) of subTitles">
              <div :key="`detail-${index}`" class="mb-1 text-center sub-font">
                {{ subTitle }}
              </div>
            </template>
          </div>
          <div v-for="(detail, index) of details" :key="`detail-${index}`">
            <p class="font-weight-bold">{{ detail }}</p>
            <br v-if="index !== details.length - 1" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

interface AboutShopData {
  title: string;
  subTitles: string[];
  details: string[];
}

export default Vue.extend({
  name: 'AboutShop',
  data(): AboutShopData {
    return {
      title: '-About- 当店について',
      subTitles: [
        '丁寧に育む手づくりの味',
        '“ここだけ”の',
        '美味しさと喜びを',
      ],
      details: [
        'JR他各線「日暮里駅」より徒歩10分。東京都荒川区の「sample CAFE（サンプル カフェ）」は、素材の1つ1つにこだわった様々なメニューをお届けしています。',
        'イタリアンレストランでスイーツを担当していたシェフによる彩り豊かなお菓子の数々からは、きっと“ここでしか味わえない”という特別さを感じていただけるはず。中でも当店自慢の“プリンパフェ”は、各種メディアに取り上げられ、SNSでも話題沸騰の人気メニューです。',
        'そんな当店の美味しさをもっと大勢の人達に味わっていただけるよう、この度通販によるお取り寄せをスタート。ちょっとした自分へのご褒美はもちろん、ギフトや記念日のプレゼントにもぴったりです。どうぞ思い思いのシーンに、sample CAFEの贈り物をご利用ください。',
      ],
    }
  },
})
</script>

<style scoped>
.parallax {
  color: white;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 839px;
  width: 100vw;
  background-image: url('https://cdn.vuetifyjs.com/images/parallax/material.jpg');
}

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

