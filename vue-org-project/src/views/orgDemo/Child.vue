<template>

</template>

<script setup>
//有一个例外的情况，使用了 <script setup> 的组件是默认私有的：
// 一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西，
// 除非子组件在其中通过 defineExpose 宏显式暴露：
import {ref} from 'vue'
const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>

<style scoped>

</style>
