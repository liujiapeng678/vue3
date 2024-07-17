//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

// //测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
    mounted(el, binding){
        //el 指令绑定的元素 img dom对象
        //binding：binding.value指令等于号后面的表达式的值，图片url
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                if(isIntersecting){
                    el.src = binding.value
                }
            },
        )
    }
})
