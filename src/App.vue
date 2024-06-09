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
<script setup>
const message = 'this is message'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage"> log </button>
  </div>
</template>