<!-- <script>
export default {
  setup(){
    const message = 'this is message'
    const logMessage = ()=>{
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  }
}
</script> -->
<!-- <script setup>
  import { reactive } from 'vue'//导入函数
  //执行函数，传入一个对象类型的参数，响应式对象可以引发视图的更新
  //ref函数既支持简单类型也支持对象，返回响应式的对象
  const state = reactive({
    count: 0
  })
  const setCount = () => {
    state.count++
  }
</script> -->
<!-- <script setup>
  import { ref } from 'vue'
  const count = ref(0)
  //脚本区域修改ref产生的相应式数据，通过.value属性
  const setCount = () => {
    count.value++
  }
</script> -->
<!-- computed计算属性函数 return 基于相应式数据做计算的值-->

<script setup>
  import { ref } from 'vue'
  import { computed } from 'vue'
  const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
  const computedList = computed(()=>{
    return list.value.filter(item => item > 2)
  })
</script>
<template>
  <div>
    原始响应式数据 {{ list }}
  </div>
  <div>
    计算属性数组 {{ computedList }}
  </div>
</template>