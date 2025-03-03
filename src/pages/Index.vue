<template>
  <!-- 這邊最大框 -->
  <div class="flex">
    <!-- 這是左邊導覽列 -->
    <div class=" w-20 h-dvh">
      <NavBar />
    </div>
    <div class="w-full h-dvh">
      <!-- 這是搜索框 -->
      <div class="w-full h-20">
        <InputBox />
      </div>
      <!-- 這是圖片瀑布流展示區 -->
      <div class="w-full h-dvh">
        <PictureFlow />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/global/NavBar.vue";
import InputBox from "@/components/global/InputBox.vue";
import PictureFlow from "@/components/index/PictureFlow.vue";
</script>

<style scoped></style>