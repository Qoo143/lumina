<template>
  <!-- 我是小寶箱 w-5/12 h-2/3-->
  <div class=" w-full h-full rounded-3xl overflow-hidden flex shadow-2xl">
    <!-- 右邊的loggin -->
    <div class="w-full h-full pt-[88px] bg-gray-300">
      <!-- 包裹箱 -->
      <div class="w-full h-full  flex flex-col items-center">
        <p class="text-3xl pb-16">Register</p>
        <!-- 帳號輸入框 -->
        <div class="w-3/5 h-10 mb-4 pl-2 flex items-center bg-slate-100 rounded-xl">
          <span class="mr-2"><img src="@/assets/images/user.png" alt="" width="17" height="17"></span>
          <input type="text" placeholder="請輸入帳號"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400">
        </div>
        <!-- 密碼輸入框 -->
        <div class="w-3/5 h-10 mb-5 pl-2 flex items-center bg-slate-100 rounded-xl">
          <span class="mr-2"><img src="@/assets/images/padlock.png" alt="" width="17" height="17"></span>
          <input type="password" placeholder="請輸入密碼"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400">
        </div>

        <button class="text-sm mb-20 hover:underline hover:underline-offset-4">ForgetPassword?</button>
        <ul class="flex gap-6">
          <li class="w-10 h-10 bg-slate-200 rounded-lg"></li>
          <li class="w-10 h-10 bg-slate-200 rounded-lg"></li>
          <li class="w-10 h-10 bg-slate-200 rounded-lg"></li>
        </ul>
        <button class=" w-52 h-10 bg-orange-300 mt-5 rounded-xl hover:bg-orange-400">login</button>
      </div>
    </div>
    <!-- 左邊的switch -->
    <div class=" min-w-[400px] h-full pt-24 bg-gray-100">
      <!-- 包裹箱 -->
      <div class="w-full h-full flex flex-col items-center ">
        <p class="text-2xl pb-16">welcome to Lumani</p>
        <p class="pb-3">want to login?</p>
        <button @click="$router.replace({ name: 'login' })" class="text-2xl text-orange-400  py-3 px-5 mb-[155px] border-2 border-orange-400 rounded-xl 
              hover:bg-orange-400 hover:text-white">Login</button>
        <img src="@/assets/images/LominaLogo_B.png" alt="" class="">
        <p class="text-xs mt-2 text-gray-500">© 2025 Lumina, Inc. 版權所有</p>
      </div>
    </div>

  </div>


</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
