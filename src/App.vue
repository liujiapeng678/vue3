<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import Edit from './components/Edit.vue'
import axios from 'axios'
// TODO: 列表渲染 ，声明响应式list，调用接口获取数据，后端数据赋值给list，绑定到table组件
const list = ref([])
const getList = async () =>{ // 调用接口的函数，用的是axios，同步的写法，在created或mounted里调用
  const res = await axios.get('./list')
  list.value = res.data
}

onMounted(() => getList())

// TODO: 删除功能，获取当前行的id，通过id调用删除接口，更新最新的列表
const onDelete = async (id) => {
  await axios.delete(`/del/${id}`)
  getList()
}

// TODO: 编辑功能，打开弹框（获取子组件edit.vue实例，调用方法或修改属性），回填数据（调用详情接口/当前行的静态数据），更新数据
const editRef = ref(null)
const onEdit = (row) => {
  editRef.value.open(row)
}


</script>

<template>
  <div class="app">
    <el-table :data="list">3
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button type="primary" @click="onEdit(row)" link>编辑</el-button>
          <el-button type="danger" @click="onDelete(row.id)" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="editRef" @on-update="getList"/>
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
