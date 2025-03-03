<template>
  <!-- 我是小寶箱 w-5/12 h-2/3-->
  <div class="w-full h-full rounded-3xl overflow-hidden flex shadow-2xl">
    <!-- 左邊的register -->
    <div class="w-full h-full pt-[88px] bg-gray-300">
      <!-- 包裹箱 -->
      <div class="w-full h-full flex flex-col items-center">
        <p class="text-4xl pb-10 font-mono">Register</p>

        <!-- 使用者輸入框 -->
        <div class="w-3/5 h-10 mb-6 pl-2 pr-2 flex items-center bg-slate-100 rounded-xl relative">

          <span class="mr-2"><img src="@/assets/images/user.png" alt="" width="17" height="17" /></span>
          <input v-model="inputUsername" type="text" placeholder="輸入使用者名稱"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400" />

          <span class="w-5 h-5 absolute -right-8">
            <img v-if="inputUsernameOption === true" src="@/assets/images/check.png" alt="" />
            <img v-else-if="inputUsernameOption === false" src=" @/assets/images/multiply.png" alt="" />
          </span>

          <div class="h-7 absolute left-7 top-10 text-sm">{{ inputUsernameAlert }}</div>
        </div>

        <!-- 信箱輸入框 -->
        <div class="w-3/5 h-10 mb-6 pl-2 pr-2 flex items-center bg-slate-100 rounded-xl relative">

          <span class="mr-2"><img src="@/assets/images/email.png" alt="" width="17" height="17" /></span>

          <input v-model="inputAccount" type="text" placeholder="輸入帳號信箱"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400" />

          <span class="w-5 h-5 absolute -right-8">
            <img v-if="inputAccountOption" src="@/assets/images/check.png" alt="" />
            <img v-else-if="inputAccountOption === false" src="@/assets/images/multiply.png" alt="" />
          </span>

          <div class="h-7 absolute left-7 top-10 text-sm">{{ inputAccountAlert }}</div>
        </div>

        <!-- 密碼輸入框 -->
        <div class="w-3/5 h-10 mb-6 pl-2 pr-2 flex items-center bg-slate-100 rounded-xl relative">

          <span class="mr-2"><img src="@/assets/images/padlock.png" alt="" width="17" height="17" /></span>

          <input v-model="inputPassword" type="text" placeholder="請輸入密碼"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400" />

          <span class="w-5 h-5 absolute -right-8">
            <img v-if="inputPasswordOption === true" src="@/assets/images/check.png" alt="" />
            <img v-else-if="inputPasswordOption === false" src="@/assets/images/multiply.png" alt="" />
          </span>

          <div class="h-7 absolute left-7 top-10 text-sm overflow-visible z-10 text-nowrap">{{ inputPasswordAlert }}
          </div>
        </div>

        <!-- 二次密碼輸入框 -->
        <div class="w-3/5 h-10 mb-6 pl-2 pr-2 flex items-center bg-slate-100 rounded-xl relative">

          <span class="mr-2"><img src="@/assets/images/padlock.png" alt="" width="17" height="17" /></span>

          <input v-model="inputSecPassword" type="text" placeholder="請再次輸入密碼"
            class="w-full h-full bg-slate-100 focus:outline-none rounded-xl placeholder-gray-400" />

          <span class="w-5 h-5 absolute -right-8">
            <img v-if="inputSecPasswordOption === true" src="@/assets/images/check.png" alt="" />
            <img v-else-if="inputSecPasswordOption === false" src="@/assets/images/multiply.png" alt="" />
          </span>

          <div class="h-7 absolute left-7 top-10 text-sm">{{ inputSecPasswordAlert }}</div>
        </div>

        <button class="w-52 h-10 bg-orange-300 mt-5 rounded-xl btn flex items-center justify-center">
          <span class="absolute z-10">register</span>
        </button>
      </div>
    </div>
    <!-- 右邊的switch -->
    <div class="min-w-[400px] h-full pt-24 bg-gray-100">
      <!-- 包裹箱 -->
      <div class="w-full h-full flex flex-col items-center">
        <p class="text-2xl pb-16">welcome to Lumani</p>
        <p class="pb-3">want to login?</p>
        <button @click="$router.replace({ name: 'login' })"
          class="text-2xl text-orange-400 py-3 px-5 mb-[155px] border-2 border-orange-400 rounded-xl hover:bg-orange-400 hover:text-white transition-colors duration-300">
          Login
        </button>
        <img src="@/assets/images/LominaLogo_B.png" alt="" class="" />
        <p class="text-xs mt-2 text-gray-500">© 2025 Lumina, Inc. 版權所有</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, watch } from "vue";
// 定義輸入值和驗證狀態，初始為 null 表示不顯示圖標
//
const inputUsername = ref<string>('');
const inputUsernameOption = ref<null | boolean>(null);
const inputUsernameAlert = ref<string>('')
//
const inputAccount = ref<string>('');
const inputAccountOption = ref<null | boolean>(null);
const inputAccountAlert = ref<string>('');
//
const inputPassword = ref<string>('');
const inputPasswordOption = ref<null | boolean>(null);
const inputPasswordAlert = ref<string>('');
//
const inputSecPassword = ref<string>('');
const inputSecPasswordOption = ref<null | boolean>(null);
const inputSecPasswordAlert = ref<string>('');

//正則表達式：使用者名稱（中文、大小寫英文、數字，至少2個字符）
const usernameRegex = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,20}$/;
//正則表達式：信箱
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//正則表達式：密碼（由大小寫英文、數字、特殊字符，任意2種组成，8-20個字符）
const passwordRegex = /^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{8,20}$/;
// 允許的符號（用於提示）
const allowedSymbols = '@#$%^&*-'; // 明確指定允許的符號

// 監聽使用者名稱
watch(inputUsername, (n) => {
  if (n === '') {
    inputUsernameOption.value = null;
    inputUsernameAlert.value = '';
  } else if (usernameRegex.test(n)) {
    inputUsernameOption.value = true;
    inputUsernameAlert.value = '';
  } else {
    inputUsernameOption.value = false;
    if (n.length < 2) {
      inputUsernameAlert.value = '需至少2個字符';
    } else if (n.length >= 20) {
      inputUsernameAlert.value = '不得超過20個字符';
    } else {
      inputUsernameAlert.value = '只能包含中文、英文或數字';
    }
  }
});

// 監聽信箱
watch(inputAccount, (n) => {
  if (n === '') {
    inputAccountOption.value = null;
    inputAccountAlert.value = '';
  } else if (emailRegex.test(n)) {
    inputAccountOption.value = true;
    inputAccountAlert.value = '';
  } else {
    inputAccountOption.value = false;
    inputAccountAlert.value = '請輸入有效的電子郵件地址';
  }
});

// 監聽密碼
watch(inputPassword, (value) => {
  if (value === '') {
    inputPasswordOption.value = null;
    inputPasswordAlert.value = '';
  } else {
    const symbolsValid = /^[a-zA-Z0-9@#$%^&*-]*$/.test(value); // 檢查是否只包含允許字符
    const hasTwoTypes = passwordRegex.test(value); // 檢查是否至少包含兩種字符類型
    const lengthValid = value.length >= 8 && value.length <= 20; // 檢查長度

    if (symbolsValid && hasTwoTypes && lengthValid) {
      inputPasswordOption.value = true;
      inputPasswordAlert.value = '';
    } else {
      inputPasswordOption.value = false;
      let alertMessages = [];

      if (!symbolsValid) {
        alertMessages.push(`只能使用大小寫英文、數字和符號（${allowedSymbols}）`);
      }
      if (!hasTwoTypes) {
        alertMessages.push('必須由字母、數字、特殊字符中的至少兩種組成');
      }
      if (!lengthValid) {
        if (value.length < 8) {
          alertMessages.push(' 需至少8個字');
        } else if (value.length > 20) {
          alertMessages.push(' 不得超過20個字');
        }
      }

      inputPasswordAlert.value = alertMessages.join('\n');
    }
  }
});

// 監聽二次密碼
watch(inputSecPassword, (value) => {
  if (value === '') {
    inputSecPasswordOption.value = null;
    inputSecPasswordAlert.value = '';
  } else {
    const matchPassword = value === inputPassword.value; // 檢查是否與密碼相同
    const symbolsValid = /^[a-zA-Z0-9@#$%^&*-]*$/.test(value); // 檢查是否只包含允許字符
    const hasTwoTypes = passwordRegex.test(value); // 檢查是否至少包含兩種字符類型
    const lengthValid = value.length >= 8 && value.length <= 20; // 檢查長度

    if (matchPassword && symbolsValid && hasTwoTypes && lengthValid) {
      inputSecPasswordOption.value = true;
      inputSecPasswordAlert.value = '';
    } else {
      inputSecPasswordOption.value = false;
      let alertMessages = [];

      if (!matchPassword) {
        alertMessages.push('兩次密碼不一致');
      }
      if (!symbolsValid) {
        alertMessages.push(` 只能使用大小寫英文、數字和符號（${allowedSymbols}）`);
      }
      if (!hasTwoTypes) {
        alertMessages.push(' 必須由字母、數字、特殊字符中的至少兩種組成');
      }
      if (!lengthValid) {
        if (value.length < 8) {
          alertMessages.push(' 需至少8個字符');
        } else if (value.length > 20) {
          alertMessages.push(' 不得超過20個字符');
        }
      }

      inputSecPasswordAlert.value = alertMessages.join('\n');
    }
  }
});

</script>

<style scoped>
input {
  white-space: nowrap;
  /* 防止換行 */
}
</style>
