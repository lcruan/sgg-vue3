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
}
```