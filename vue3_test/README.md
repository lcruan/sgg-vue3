## 1 Composition API

### 1.1 setup
- setup 是一个函数
- 组件中所用到的属性、方法均写在setup中
- 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
- 补充：vue3组件中的模板结构可以没有根标签，写了也没事

### 1.2 ref
- 作用：定义一个响应式数据
```js
// 先导入 ref
import { ref } from 'vue'
setup() {
    let name = ref('张三')
    let age = ref(48)
    let obj = ref({
        type: '前端工程师',
        salary: '30k'
    })
}

function changeInfo() {
    name.value = '李四'
    age.value = 55
    job.value.type = 'UI设计师'
    job.value.salary = '50k'
}
```

### 1.3 reactive函数

### 1.4 vue3响应式原理
  - 通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过Reflect（反射）:  对源对象的属性进行操作。

  ### 1.5 setup 的两个注意点
  - setup 执行时机
    - 在 beforeCreate 之前执行一次，this是 undefined