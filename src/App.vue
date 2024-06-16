<!-- 
//执行函数，传入一个对象类型的参数，响应式对象可以引发视图的更新
//ref函数既支持简单类型也支持对象，返回响应式的对象
//脚本区域修改ref产生的相应式数据，通过.value属性
computed计算属性函数 return 基于相应数据做计算的值 -->
<!-- watch函数用来监听单一或多个数据变化，数据变化时执行回调函数，两个额外参数对象1.immediate（第一次就立即执行，变化时也执行），2.deep（深度侦听）
例如state = ref({count: 0}) state.value.count++,state会改变，但不会触发侦听state的watch的回调函数，这时需要deep，如果前面用reactive，reactive默认开启deep。
如果对象中除了count还有age，但又不想监听age，在watch中再写一个回调函数，不用deep，指出想要监听谁，deep有性能损耗，一般不开启 -->
<!-- 生命周期函数 创建挂载更新卸载 选项式API->组合式API 引入函数，执行函数传入回调， -->

<!-- 组合式API父子通信。模版引用，调用ref函数->ref对象，通过ref标识绑定对象，组件挂载完毕后才能获取通过.value。默认情况下在<script setup>语法糖下组件内部的属性和方法不开放给父组件
访问，可以通过defineExpose编译宏指定哪些属性和方法允许访问。 -->
<!-- provide和inject，顶层组件向任意的底层组件传递数据和方法，实现跨层组件通信，顶层组件通过provide函数提供数据，底层组件通过inject函数获取数据，传递静态数据，响应式数据传ref对象，方法
不破坏单向数据流的情况下，在底层修改顶层数据，需要把顶层的修改数据的方法传给底层，谁的数据谁修改。
<script setup>
  import { ref } from 'vue'
  import { watch } from 'vue'
  const count = ref(0)
  const setCount = () => {
    count.value++
  }
  watch(count, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })
</script>
<template>
  <div>
    <button @click="setCount">{{ count }}</button>
  </div>
</template> -->

