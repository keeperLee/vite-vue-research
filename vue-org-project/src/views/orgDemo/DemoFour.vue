<script>
import { reactive,toRefs } from 'vue'
export default {
  setup(){
    let data = reactive({
      first:'124',
      second:'233',
      third:'666'
    })
    let obj = toRefs(data)
    return {
      ...obj
    }
  }
}



</script>

<template>
  <div class="demo">
    <div>{{first}}</div>
    <div>{{second}}</div>
    <div>{{third}}</div>
    <button @click="first++">增加</button>

  </div>
</template>
