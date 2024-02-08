<template>
  <div>
    <mainHeader />
    <mainCategories />
  </div>
</template>

<script>
import mainHeader from './components/headerBase/mainHeader.vue'
import mainCategories from './components/categories/mainCategories.vue'
export default {
  components: {
    mainHeader,
    mainCategories
  }
}
</script>
