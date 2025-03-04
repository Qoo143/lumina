<template>
  <div class=" w-full h-full my-0 mx-auto bg-gray-200 ">

    <!-- 這是創建圖片卡片 -->
    <div v-for="item in 5">
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow01.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow02.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow03.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow04.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow05.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow06.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow07.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow08.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow09.jpg" alt="">
        </div>
      </div>
      <div class="flowCard">
        <div>
          <img src="@/assets/flow/flow10.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- 清除浮動 -->
    <div class="clear-both"></div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>