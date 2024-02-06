<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    名：<input type="text" v-model="person.lastName">
  </template>
  
  
  
  <script>
  import { reactive } from "vue";
  export default {
    name: "Demo",
    setup() {
      // 数据
      let person = reactive({
        firstName: "张",
        lastName: "三"
      })
  
      return {
        person
      };
    },
  };
  </script>
  
  <style>
  </style>
  