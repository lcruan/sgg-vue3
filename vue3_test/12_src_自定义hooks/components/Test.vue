<template>
  <h2>我是test组件</h2>
  <h2>当前点击时鼠标的坐标为：x:{{ point.x }}, y: {{ point.y }}</h2>
</template>
<script>
import userPoint from "../hooks/userPoint";
export default {
  name: "Test",
  setup() {
    let point = userPoint();
    return {
      point,
    };
  },
};
</script>