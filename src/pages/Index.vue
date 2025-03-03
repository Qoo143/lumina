<template>
  <!-- 這邊最大框 -->
  <div class="flex min-h-dvh">
    <!-- 這是左邊導覽列 -->
    <div class="w-20 h-dvh">
      <NavBar />
    </div>
    <!-- 右邊主內容區 -->
    <div class="flex-1 flex flex-col h-dvh">
      <!-- 這是搜索框 -->
      <div class="w-full h-20">
        <InputBox />
      </div>
      <!-- 標籤區 -->
      <div class="w-full h-20">
        <LabelArea />
      </div>
      <!-- 這是圖片瀑布流展示區 -->
      <div class="w-full flex-1 overflow-auto scrollbar-none">
        <PictureFlow />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/index/NavBar.vue";
import InputBox from "@/components/index/InputBox.vue";
import PictureFlow from "@/components/index/PictureFlow.vue";
import LabelArea from "@/components/index/LabelArea.vue";
</script>

<style scoped>
.scrollbar-none {
  -ms-overflow-style: none;
  /* IE 和 Edge */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, 和 Opera */
}
</style>