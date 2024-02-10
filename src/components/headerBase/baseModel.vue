
<template>
  <div
    v-if="isOpen"
    class="!opacity-100 !visible fixed w-full h-full bg-black/50 flex justify-center z-[100] top-0 left-0 transition-all duration-300 items-center p-3"
  >
    <div
      class="bg-white p-4 380:container mx-auto lg:max-w-sm shadow-xl relative h-500 overflow-y-auto rounded-2xl"
    >
      <div class="flex items-center justify-between">
        <h1 class="font-bold text-24">{{ title }}</h1>
        <button @click="closeModal">
          <span class="icon-cancel text-24"></span>
        </button>
      </div>
      <div>
        <p class="font-medium text-14 text-gray leading-4 mt-2">{{ paragraph }}</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'

// const target = ref(null)
// onClickOutside(target, () => emit('modal-close'))

const props = defineProps({
  title: String,
  paragraph: String,
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])

const closeModal = () => {
  emit('modal-close')
}

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
</script>
