<template>
  <div class="bg-white w-full mb-76">
    <div class="xl:container mx-auto">
      <div class="h-20 flex justify-between items-center">
        <div class="flex items-center">
          <button class="flex items-center">
            <img class="w-5 h-5" src="../assets/images/Language-ru.svg" alt="language-ru" />
            <span class="mx-1 text-sm font-medium">Русский</span>
            <span class="icon-icon-chevron-bottom mr-24"></span>
          </button>

          <div class="group gap-1">
            <a class="flex items-center group-hover:text-blue transition-all" href="tel:+998885005000">
              <span class="icon-phone"></span>
              <spam class="font-medium text-sm">+998910190544</spam>
            </a>
          </div>
        </div>

        <div class="flex items-center">
          <span class="icon-heart mr-1 font-semibold text-blue text-20"></span>
          <a href="#" class="font-semibold text-xl mr-8 hover:text-blue transition-all">Избранное</a>
          <button @click="openModal"
            class="flex items-center py-2.5 px-6 bg-gray-light rounded-lg hover:bg-[#d5d8db] transition-all">

            <p class="font-semibold text-xl mr-2">Войти</p>
            <span class="icon-login text-20"></span>
          </button>
          <baseModel :title="entranceModul.title" :paragraph="entranceModul.paragraph" :isOpen="isModalOpened"
            @modal-close="closeModal">
            <form class="mt-7 mb-2" action="">
              <label for="login">Логин</label><br />
              <input class="py-3 pl-3 pr-107 mt-1 mb-4 rounded-lg bg-gray-light" type="text" id="login"
                placeholder="Введите логин" /><br />
              <label for="parol">Пароль</label><br />
              <div class="relative">
                <input class="py-3 pl-3 pr-107 mt-1 border-blue rounded-lg bg-gray-light" type="password" id="parol"
                  placeholder="Введите пароль" />
                <div class="absolute inset-y-8 right-2 flex items-center">
                  <span class="icon-icon-x-eyes text-gray text-20"></span>
                </div>
              </div>
            </form>
            <a href="#" class="text-blue text-14">Забыли пароль?</a>
            <div class="mt-10">
              <button class="w-[338px]  pt-3 pb-3 bg-[#388FF3] text-white transition-all rounded-xl hover:bg-[#539df1] ">
                Войти
              </button>
              <div class="mt-3 flex items-center">
                <div class="w-[65px] h-[1px] bg-[#8E9297]"></div>
                <h6 class="text-gray font-normal ml-4 text-[14px]  mr-3">Хотите стать продавцом?</h6>
                <div class="w-[65px] h-[1px] bg-gray"></div>
              </div>
              <button @click="isOpanApplicationModal" class="w-[338px] mt-2 pt-3 pb-3 bg-white border-2 text-[#388FF3] transition-all rounded-xl 
        hover:bg-[#539df1] hover:text-[#ffff]  ">
                Подать заявку
              </button>
            </div>
          </baseModel>

          <applicationsModul :isOpen="opanApplicationModul" />

        </div>
      </div>
      <div class="px-4 py-3.5 absolute left-[50%] translate-x-[-50%] top-0 shadow-3xl rounded-b-[20px] bg-white">
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
import applicationsModul from './applicationsModul.vue';

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const opanApplicationModul = ref(false)

const isOpanApplicationModal = () => {
  opanApplicationModul.value = true
  closeModal()
}
const isCloseApplicationModal = () => {
  opanApplicationModul.value = false
}

// const closeModal = ref(false);
</script>
