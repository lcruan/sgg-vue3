<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" /><br />
  名：<input type="text" v-model="person.lastName" /><br />
  <span>全名：{{ person.fullName }}</span
  ><br />
  全名：<input type="text" v-model="person.fullName" />
</template>
  
  
  
  <script>
//   组合式api，就是通过导入这种形式编写
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    //   计算属性 - 简写（没有考虑计算属性别修改的情况）
    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    });

    //   计算属性 - 完整写法（考虑读和写）
    person.fullName = computed({
        get() {
            return person.firstName + "-" + person.lastName;
        },
        set(value) {
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    });

    return {
      person,
    };
  },
};
</script>
  
  <style>
</style>
  