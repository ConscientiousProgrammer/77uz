<template>
  <div v-if="isOpen"
    class="!opacity-100 !visible fixed w-full h-full bg-black/50 flex justify-center z-[100] top-0 left-0 transition-all duration-300 items-center p-3">
    <div class="bg-white p-4 380:container mx-auto lg:max-w-sm shadow-xl relative h-500 overflow-y-auto rounded-2xl">
      <div :class="'w-[379px] h-[605px] bg-white rounded-2xl'">
        <div class="w-[338px] h-auto border-solid border-2 mx-auto mt-5">
          <div class="flex justify-between">
            <h3 class="font-bold text-24">
              Подать заявку
            </h3>
            <button @click="closeModal">
              <span class="icon-cancel text-24"></span>
            </button>
          </div>
          <p class="text-14 font-medium text-[#8E9297] mt-2">
            Войти в систему чтобы торговать в системе
          </p>
          <div class="mt-6">

            <p class="text-14 font-medium text-[#63676C] ">Ф.И.О.</p>

            <input type="text" placeholder="Введите вашу Ф.И.О. "
              class="w-full p-3 bg-[#F0F3F7] mt-3 border-none outline-none rounded-lg">

            <p class="text-14 font-medium text-[#63676C] mt-3 ">Название продукта</p>

            <input type="text" placeholder="Введите название продукта "
              class="w-full p-3 bg-[#F0F3F7] mt-3 border-none outline-none rounded-lg">

            <p class="text-14 font-medium text-[#63676C] mt-3 ">Категория</p>
            <select name="" id="" class="w-full p-3 bg-[#F0F3F7]">
              <option value="" class="w-full p-3 h-[52px]">salom</option>
              <option value="">alik</option>
              <option value="">qondauy</option>
              <option value="">salom</option>
            </select>
          </div>

        </div>
      </div>
      <div class="mt-10">
        <button class="w-[338px]  pt-3 pb-3 bg-[#388FF3] text-white transition-all rounded-xl hover:bg-[#539df1] ">
          Войти
        </button>
        <div class="mt-3 flex items-center">
          <div class="w-[65px] h-[1px] bg-[#8E9297]"></div>
          <h6 class="text-gray font-normal ml-4 text-[14px]  mr-3">Хотите стать продавцом?</h6>
          <div class="w-[65px] h-[1px] bg-gray"></div>
        </div>
        <button class="w-[338px] mt-2 pt-3 pb-3 bg-white border-2 text-[#388FF3] transition-all rounded-xl 
        hover:bg-[#539df1] hover:text-[#ffff]  ">
          Подать заявку
        </button>

      </div>



      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'
defineProps({
  title: String,
  paragraph: String,
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])

const closeModal = () => {
  emit('modal-close')
}
// const target = ref(null)
// onClickOutside(target, () => emit('modal-close'))

// defineProps({
//   // item {
//   //     // login: String,
//   //     // loginPlaceholder: String,
//   //     // parol: String,
//   //     // parolPlaceholder: String,
//   //     // forgotParol: String,
//   //     // buttonEntrance: String,
//   //     // question: String,
//   //     // buttonApply: String
//   // }
//   title: String,
//   open: Boolean,
//   paragraph: String,
//   closeModal: Boolean
// })
// const emit = defineEmits({
//     click: false,
// });
</script>
