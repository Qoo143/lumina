<template>
  <!-- 我是小寶箱 w-5/12 h-2/3-->
  <div class="w-full h-full rounded-3xl overflow-hidden flex shadow-2xl">
    <!-- 左邊的switch -->
    <div class="2xl:min-w-[400px] md:min-w-[350px] h-full pt-24 bg-gray-100">
      <!-- 包裹箱 -->
      <div class="w-full h-full flex flex-col items-center">
        <p class="text-xl pb-16">welcome to Lumani</p>
        <p class="pb-3">do not have account ?</p>
        <button @click="$router.replace({ name: 'register' })"
          class="text-2xl text-orange-400 py-3 px-5 mb-[155px] border-2 border-orange-400 rounded-xl hover:bg-orange-400 hover:text-white transition-colors duration-300">
          Register
        </button>
        <img src="@/assets/images/LominaLogo_B.png" alt="" class="" />
        <p class="text-xs mt-2 text-gray-500">© 2025 Lumina, Inc. 版權所有</p>
      </div>
    </div>
    <!-- 右邊的loggin -->
    <div class="w-full h-full pt-[88px] bg-gray-300">
      <!-- 包裹箱 -->
      <div class="w-full h-full flex flex-col items-center">
        <p class="text-4xl pb-16 font-mono">Login</p>
        <!-- 帳號輸入框 -->
        <div class="w-3/5 h-10 mb-4 pl-2 flex items-center bg-slate-100 rounded-xl">
          <span class="mr-2"><img src="@/assets/images/user.png" alt="" width="17" height="17" /></span>
          <input type="text" placeholder="請輸入帳號"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-slate-400" />
        </div>
        <!-- 密碼輸入框 -->
        <div class="w-3/5 h-10 mb-5 pl-2 flex items-center bg-slate-100 rounded-xl">
          <span class="mr-2"><img src="@/assets/images/padlock.png" alt="" width="17" height="17" /></span>
          <input type="password" placeholder="請輸入密碼"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400" />
        </div>

        <button class="text-sm mb-20 hover:underline hover:underline-offset-4">
          ForgetPassword?
        </button>
        <ul class="flex gap-6 items-center">
          <li class="w-10 h-10 p-1 cursor-pointer hover:bg-gray-400 active:bg-[rgb(187,187,187)] rounded-md">
            <img src="@/assets/images/google.svg" alt="" />
          </li>
          <li class="w-9 h-9 p-1 cursor-pointer hover:bg-gray-400 active:bg-[rgb(187,187,187)] rounded-md">
            <img src="@/assets/images/facebook.svg" alt="" />
          </li>
          <li class="w-9 h-9 p-1 cursor-pointer hover:bg-gray-400 active:bg-[rgb(187,187,187)] rounded-md">
            <img src="@/assets/images/apple.svg" alt="" />
          </li>
        </ul>
        <!-- --------------------<<>>-------------------- -->
        <button @click="$router.push({ name: 'index' })"
          class="w-52 h-10 bg-orange-300 mt-5 rounded-xl btn flex items-center justify-center">
          <span class="absolute z-10">login</span>
        </button>
        <!-- --------------------<<>>-------------------- -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<style scoped>
/* .btn {
  position: relative;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #f87171, #eab308);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 12px;
}

.btn:hover::before {
  opacity: 1;
  border-radius: 12px;
}

.btn:active::before {
  background: linear-gradient(to right, #fecaca, #fef08a);
  opacity: 1;
  border-radius: 12px;
} */
</style>
