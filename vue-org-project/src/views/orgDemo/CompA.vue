<script setup>
import {getCurrentInstance, onActivated, onDeactivated, ref} from 'vue'
const count = ref(0)


onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时c
  console.log(getCurrentInstance())
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>

<template>
  <p>Current component: A</p>
  <span>count: {{ count }}</span>
  <button @click="count++">+</button>
</template>
