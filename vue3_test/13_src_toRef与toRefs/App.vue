<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo/>
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo";
export default {
  name: "App",
  components: {
    Demo
  },
};
</script>

<style>
</style>
