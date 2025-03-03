<template>
  <div class="bg-gray-100 w-full h-full pr-10 flex gap-10">
    <!-- 輸入框 -->
    <div class="relative w-full h-full pl-5 flex items-center justify-center">
      <img class="w-auto h-8 absolute left-10" src="@/assets/images/apple.svg" alt="">
      <input @keydown="search($event)"
        class=" w-full h-4/5 pl-16 border-8 text-lg border-gray-200 rounded-3xl focus:outline-none" type="text"
        placeholder="隨意來點">
    </div>
    <!-- codepen 白天黑夜切換 -->
    <div class="w-20 h-auto flex items-center">
      <label class="toggle-switch icon">
        <input type="checkbox">
        <span class="slider">
        </span>
      </label>
    </div>
    <!-- 這邊是人像 -->
    <div class="w-16 h-auto flex items-center"><img
        class="w-16 p-2 transition-colors duration-300 cursor-pointer hover:bg-gray-400 active:bg-gray-300 rounded-2xl"
        src="@/assets/images/apple.svg" alt="">
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
function search(e: any) {
  if (e.key === "Enter") alert('搜索')

}
</script>

<style scoped>
/* codepen */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.toggle-switch.icon .slider:before {
  content: "☀️";
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.toggle-switch.icon input:checked+.slider:before {
  content: "🌙";
}

.toggle-switch.icon input:checked+.slider {
  background-color: #333;
}

/* --------------------<<>>-------------------- */
</style>