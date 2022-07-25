<template>
  <Child ref="child"/>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  console.log(child.value)
  // child.value 是 <Child /> 组件的实例
})
</script>

