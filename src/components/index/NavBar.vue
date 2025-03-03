<template>
  <div class="bg-gray-300 w-full h-full py-5 flex flex-col justify-between">
    <!-- logo區 -->
    <div class="flex justify-center"><img class="cursor-pointer" src="@/assets/images/LominaLogo_B.png" alt=""></div>

    <!-- 選單區 -->
    <ul class="flex flex-col gap-5">
      <li v-for="item in liList" :key="item.src" class="flex justify-center ">
        <img
          class="w-14 h-14 p-2 rounded-xl transition-colors duration-300 cursor-pointer hover:bg-gray-400 active:bg-[rgb(228,228,228)]"
          :src=item.src alt="">
      </li>
    </ul>
    <!-- logo區 -->

    <div class="flex justify-center"><img src="@/assets/images/LominaLogo_B.png" alt=""></div>

  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import homeImage from '@/assets/images/home.png';
import heartDarkImage from '@/assets/images/heart-dark.png';
import uploadButtonImage from '@/assets/images/UploadButton.png';
import settingImage from '@/assets/images/setting.png';

const liList = reactive([
  { src: homeImage, linkTo: 'abc' },
  { src: heartDarkImage, linkTo: 'abc' },
  { src: uploadButtonImage, linkTo: 'abc' },
  { src: settingImage, linkTo: 'abc' },
]);

</script>

<style scoped></style>