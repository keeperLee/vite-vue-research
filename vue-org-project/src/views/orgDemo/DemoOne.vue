<template>
  <div>
    <!--    &lt;!&ndash; 使用特殊的 $event 变量 &ndash;&gt;-->
    <!--    <button @click="warn('Form cannot be submitted yet.', $event)">-->
    <!--      Submit-->
    <!--    </button>-->

    <!--    &lt;!&ndash; 使用内联箭头函数 &ndash;&gt;-->
    <!--    <button @click="(event) => warn('Form cannot be submitted yet.', event)">-->
    <!--      Submit-->
    <!--    </button>-->

    <p>
      Ask a yes/no question:
      <input v-model="question"/>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script setup>

import {reactive, ref, computed, watch} from "vue";

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


// function warn(message, event) {
//   console.log(event)
//   // 这里可以访问原生事件
//   if (event) {
//     event.preventDefault()
//   }
//   alert(message)
// }


const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
    () => x.value + y.value,
    (sum) => {
      console.log(`sum of x + y is: ${sum}`)
    }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})


const obj = reactive({ count: 0 })

// 这不起作用，因为你向 watch() 传入了一个 number
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})

// 提供一个 getter 函数
watch(
    () => obj.count,
    (count) => {
      console.log(`count is: ${count}`)
    }
)


//直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发：
const objA = reactive({ count: 0 })

watch(objA, (newValue, oldValue) => {
  // 在嵌套的 property 变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})


watch(
    () => state.someObject,
    (newValue, oldValue) => {
      // 注意：`newValue` 此处和 `oldValue` 是相等的
      // *除非* state.someObject 被整个替换了
    },
    { deep: true }
)

obj.count++
</script>

<style scoped>

</style>
