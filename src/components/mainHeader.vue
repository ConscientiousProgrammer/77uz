<template>
  <div class="bg-white w-full mb-76">
    <div class="xl:container mx-auto">
      <div class="h-20 flex justify-between items-center">
        <div class="flex items-center">

          <div class="relative z-0 w-[120px]">
          <div class="mr-6">
            <button
              v-click-outside="closeLanguages"
              @click="handleLanguages"
              class="flex items-center gap-2 text-sm font-medium duration-300 text-dark leading-130 hover:text-blue transition-300 max-sm:uppercase"
            >
              <span
                v-if="currentLocale === 'ru'"
                class="flex items-center justify-center space-x-2"
                ><img
                  class="w-5 h-5 shrink-0"
                  src="../assets/LanguageRU.svg"
                  alt="Русский"
                />
                <span
                  class="relative w-full py-2 leading-6 duration-300 sm:hidden group-hover/lang:text-blue transition-300 max-sm:uppercase"
                  >ru</span
                >
                <span
                  class="relative w-full py-2 leading-6 duration-300 max-sm:hidden group-hover/lang:text-blue transition-300 max-sm:uppercase"
                  >Русский</span
                ></span
              >
              <span v-else class="flex items-center justify-center space-x-2">
                <img
                  class="w-5 h-5 shrink-0"
                  src="../assets/LanguageUZ.svg"
                  alt="O’zbek"
                />
                <span
                  class="relative w-full py-2 leading-6 duration-300 sm:hidden group-hover/lang:text-blue transition-300 max-sm:uppercase"
                  >uz</span
                >
                <span
                  class="relative w-full py-2 leading-6 duration-300 group-hover/lang:text-blue transition-300 max-sm:uppercase max-sm:hidden"
                  >O’zbek</span
                ></span
              >
              <i
                class="text-dark transition icon-down text-20"
                :class="{ 'rotate-180': toggleLanguages }"
              ></i>
            </button>

          </div>
          <div>
            <div
              v-show="toggleLanguages"
              class="absolute left-0 min-w-full overflow-hidden translate-y-full bg-white rounded-lg shadow w-max -bottom-1 z-1 dropdown-shadow"
            >
              <div>
                <button
                  @click="changeLocale('ru')"
                  class="flex items-center gap-2 px-4 cursor-pointer group/lang"
                >
                  <img
                    class="w-5 h-5 shrink-0"
                    src="../assets/LanguageRU.svg"
                    alt="Русский"
                  />
                  <span
                    class="relative w-full py-2 leading-6 duration-300 sm:hidden group-hover/lang:text-blue transition-300 max-sm:uppercase"
                    :class="{ 'text-blue': locale === 'ru' }"
                    >ru</span
                  >
                  <span
                    class="relative w-full py-2 leading-6 duration-300 group-hover/lang:text-blue transition-300 max-sm:uppercase max-sm:hidden"
                    :class="{ 'text-blue': locale === 'ru' }"
                    >Русский</span
                  >
                </button>
                <button
                  @click="changeLocale('uz')"
                  class="flex items-center gap-2 px-4 cursor-pointer group/lang"
                >
                  <img
                    class="w-5 h-5 shrink-0"
                    src="../assets/LanguageUZ.svg"
                    alt="O’zbek"
                  />
                  <span
                    class="relative w-full py-2 leading-6 duration-300 sm:hidden group-hover/lang:text-blue transition-300 max-sm:uppercase"
                    :class="{ 'text-blue': locale === 'uz' }"
                    >uz</span
                  >
                  <span
                    class="relative w-full py-2 leading-6 group-hover/lang:text-blue transition-300 max-sm:uppercase max-sm:hidden"
                    :class="{ 'text-blue': locale === 'uz' }"
                    >O’zbek</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="group gap-1">
            <a
              class="flex items-center group-hover:text-blue transition-all"
              href="tel:+998885005000"
            >
              <span class="icon-phone"></span>
              <spam class="font-medium text-sm">+998910190544</spam>
            </a>
          </div>
        </div>

        <div class="flex items-center">
          <span class="icon-heart mr-1 font-semibold text-blue text-20"></span>
          <a href="#" class="font-semibold text-xl mr-8 hover:text-blue transition-all">Избранное</a>
          <button
            @click="openModal"
            class="flex items-center py-2.5 px-6 bg-gray-light rounded-lg hover:bg-[#d5d8db] transition-all">

            <p class="font-semibold text-xl mr-2">Войти</p>
            <span class="icon-login text-20"></span>
          </button>
          <baseModel
            :title="entranceModul.title"
            :paragraph="entranceModul.paragraph"
            :isOpen="isModalOpened"
            @modal-close="closeModal"
          >
            <form class="mt-7 mb-2" action="">
              <label for="login">Логин</label><br />
              <input
                class="py-3 pl-3 pr-107 mt-1 mb-4 rounded-lg bg-gray-light"
                type="text"
                id="login"
                placeholder="Введите логин"
              /><br />
              <label for="parol">Пароль</label><br />
              <div class="relative">
                <input
                  class="py-3 pl-3 pr-107 mt-1 border-blue rounded-lg bg-gray-light"
                  type="password"
                  id="parol"
                  placeholder="Введите пароль"
                />
                <div class="absolute inset-y-8 right-2 flex items-center">
                  <span class="icon-icon-x-eyes text-gray text-20"></span>
                </div>
              </div>
            </form>
            <a href="#" class="text-blue text-14">Забыли пароль?</a>
          </baseModel>
        </div>
      </div>
      <div
        class="px-4 py-3.5 absolute left-[50%] translate-x-[-50%] top-0 shadow-3xl rounded-b-[20px] bg-white"
      >
        <a href="../../index.html">
          <img class="" src="../assets/images/logo.svg" alt="logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import baseModel from './baseModel.vue'
import { entranceModul } from '../data/baseModul'
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
};

const toggleLanguages = ref(false);

const handleLanguages = () => {
  toggleLanguages.value = !toggleLanguages.value;
};

const closeLanguages = () => {
  toggleLanguages.value = false;
};

const currentLocale = ref(localStorage.getItem("locale"));

const changeLocale = (l) => {
  localStorage.setItem("locale", l);
  currentLocale.value = l;
  locale.value = l;
};


// const closeModal = ref(false);
</script>

<style>
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all 0.5s ease;
  }

  .fade-up-enter-from,
  .fade-up-leave-to {
    opacity: 0;
    transform: translateY(90%);
  }
</style>