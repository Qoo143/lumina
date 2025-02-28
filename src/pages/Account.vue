<template>
  <div class="loginBackImg"><!-- 我是背景圖 -->
    <!-- 我是大寶箱 -->
    <div
      class=" 2xl:px-[520px] 2xl:py-[166px] md:px-[200px] md:py-[50px] w-screen h-dvh flex justify-center items-center ">
      <!-- 我是小寶箱 w-5/12 h-2/3-->
      <RouterView />
    </div>
    <div class="dynamic-bg"></div><!-- 我是漸層 -->
  </div>

</template>

<script setup lang="ts">
import { RouterLink, RouterView, } from "vue-router";
</script>

<style scoped>
.loginBackImg {
  /* 背景設定 */
  background-image: url(../assets/images/whiteLight.png);
  background-size: cover;
  position: absolute;
  z-index: -1;
}

/* 這是動態漸層背景 */
.dynamic-bg {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg,
      rgba(224, 155, 155, 0.5),
      rgba(223, 203, 135, 0.5),
      rgba(214, 176, 141, 0.5),
      rgba(216, 167, 127, 0.5));
  background-size: 400% 400%;
  animation: gradientFlow 13s ease infinite;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 0%;
  }
}
</style>
