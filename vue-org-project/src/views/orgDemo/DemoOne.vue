<template>
  <div>
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
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


// const author = reactive({
//   name: 'John Doe',
//   books: [
//     'Vue 2 - Advanced Guide',
//     'Vue 3 - Basic Guide',
//     'Vue 4 - The Mystery'
//   ]
// })
//
// // 一个计算属性 ref
// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })
//
//
// const firstName = ref('John')
// const lastName = ref('Doe')
//
// const fullName = computed({
//   // getter
//   get() {
//     return firstName.value + ' ' + lastName.value
//   },
//   // setter
//   set(newValue) {
//     // 注意：我们这里使用的是解构赋值语法
//     [firstName.value, lastName.value] = newValue.split(' ')
//   }
// })
//
// const changeName = () => {
//   fullName.value = 'li jian'
// }


function warn(message, event) {
  console.log(event)
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<style scoped>

</style>
