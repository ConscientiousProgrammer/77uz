<template>
  <div>
    <div class="cursor-pointer container px-[45px] mx-auto flex mt-6 justify-between">
      <div
        class="cursor-pointer mian__inner__cards w-[336px] h-[85px] pr-6 rounded-md border-[#EAEDF0] border flex items-center justify-between"
      >
        <span
          class="cursor-pointer icon-women -ml-6 border-[#EAEDF0] border text-blue text-32 bg-white w-[64px] h-[64px] text-2xl rounded-md flex items-center justify-center"
        ></span>
        <div class="main__inner__title__dec -ml-24">
          <h5 class="font-inter font-semibold text-base">{{ item.name }}</h5>
          <p class="text-[#8E9297] text-sm">4 147 объявлений</p>
        </div>
        <span class="icon-down -rotate-90"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  item: {
    id: String,
    name: String,
    icon: String,
    product_count: Number
  }
})
</script>
