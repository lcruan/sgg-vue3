// 引入的不再是Vue构造函数了，引入一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 创建应用实例对象-app(类似于之前vue2中的vm，但app比vm更“轻”)
// const app = createApp(App)
// 挂载
// app.mount('#app')

