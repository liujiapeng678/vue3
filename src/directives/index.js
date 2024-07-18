// 懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin = {
    install(app){//懒加载指令逻辑
        //定义全局指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el 指令绑定的元素 img dom对象
                //binding：binding.value指令等于号后面的表达式的值，图片url
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}