<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref名为：myRef
    function myRef (value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef中读取数据了，我把${value}给它了`);
            track() // 通知vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)
            return value
          },
          set(newValue) {
            console.log(`有人把myRef中读取数据改为了：${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知vue去重新解析模板
            }, delay)
          }
        }
      })
    }
    // let keyWord = ref('hello') // 使用vue提供的ref
    let keyWord = myRef('hello', 500) // 使用程序员提供的ref



    return {
      keyWord
    }
  }
};
</script>

<style>
</style>
