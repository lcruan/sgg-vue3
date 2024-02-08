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
    function myRef () {
      return customRef(() => {
        return {
          get() {
            console.log(`有人从myRef中读取数据了，我把${value}给它了`);
            return value
          },
          set() {

          }
        }
      })
    }
    // let keyWord = ref('hello') // 使用vue提供的ref
    let keyWord = myRef('hello') // 使用程序员提供的ref



    return {
      keyWord
    }
  }
};
</script>

<style>
</style>
