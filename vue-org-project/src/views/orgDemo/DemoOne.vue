<template>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script setup>

import {reactive, ref, computed} from "vue";

// const raw = {}
// const proxy = reactive(raw)
// console.log(proxy)
// console.log(reactive(raw) === proxy)
// console.log(reactive(proxy) === proxy)

// const count = ref(0)
// console.log(count)
// console.log(count.value)


const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})


</script>

<style scoped>

</style>
