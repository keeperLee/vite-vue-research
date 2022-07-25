<template>
  <input ref="input"/>
</template>

<script setup>

import {reactive, ref, computed, watchEffect ,watch, onMounted} from "vue";
// 声明一个 ref 来存放该元素的引用
// 必须和模板 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})


//注意，你只可以在组件挂载后才能访问 ref。如果你想在模板中的表达式上访问 input，
// 在初次渲染时会是 null。这是因为在初次渲染前这个元素还压根不存在呢！
//如果你正试图观察一个模板 ref 的变化，确保考虑到 ref 的值为 null 的情况：
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

</script>

<style scoped>

</style>
