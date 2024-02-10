<template>
  <div class="bg-white">
    <div class="relative top-[-50%] translate-y-[-50%] flex justify-center">
      <input
        class="py-5 pl-42 pr-420 rounded-lg border-[#EAEDF0] border"
        type="text"
        id="search"
        placeholder="Что вы ищите?"
      />
      <div class="absolute inset-y-4 right-[29%] flex items-center">
        <button class="px-7 py-3 bg-black text-white rounded-md text-16 font-medium">Поиск</button>
      </div>
      <div class="absolute inset-y-8 left-[28.5%] flex items-center">
        <span class="icon-search text-[#D5D8DB] text-24"></span>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-32 font-bold">Категории</h1>
    </div>
    <div class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
      <categoriesItems v-for="item in categories" :item="item" />
    </div>
  </div>
</template>
<script setup>
import { storeInstance } from '../../instances/index'
import { onMounted, ref } from 'vue'
import categoriesItems from './categoriesItems.vue'

const categories = ref([])

async function loadCategory() {
  try {
    const response = await storeInstance.get(`/category/`)

    if (!response) {
      throw new Error("Internet bilan aloqa yo'q")
    }

    if (response.status !== 200) {
      throw new Error(response.statusText)
    }

    response.data.forEach(async (p) => {
      categories.value.push(p)
    })

    return
  } catch (error) {
    alert(error)
  }
}

onMounted(async () => {
  await loadCategory()
})
</script>
