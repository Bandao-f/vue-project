<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']" style="height: 120vh">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <message/>
              </el-icon>
              学习
            </template>
            <el-menu-item-group title="Java基础" @click="$router.push({
          path:'/flow'
          })">
              <!--              <el-menu-item index="1-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="Mysql">
              <!--              <el-menu-item index="1-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="算法">
              <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="技术方案">
              <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <icon-menu/>
              </el-icon>
              生活
            </template>
            <el-menu-item-group>
              <template #title>旅行</template>
              <!--              <el-menu-item index="2-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="2-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="聚会">
              <!--              <el-menu-item index="2-3">Option 3</el-menu-item>-->
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting/>
              </el-icon>
              帮助
            </template>
            <el-menu-item-group title="支付宝红包" @click="$router.push({
          path:'/help',query:{
            a:'Option 3'
          }
          })">
              <!--              <el-menu-item index="1-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="微信红包" @click="$router.push({
          path:'/article',query:{
            a:'Option 3'
          }
          })">
              <!--              <el-menu-item index="1-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <message/>
              </el-icon>
              我的小店
            </template>
            <el-menu-item-group title="汉服">
              <!--              <el-menu-item index="1-1">Option 1</el-menu-item>-->
              <!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
<!--      <el-header style="font-size: 12px;background: white; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);">-->
<!--        <el-input style="width: 70%;padding-left: 0" v-model="inputValue" placeholder="Please input"></el-input>-->
<!--        <div class="toolbar">-->
<!--          <el-dropdown>-->
<!--            <el-icon style="margin-right: 350px; margin-top: 3px"-->
<!--            >-->
<!--              <setting-->
<!--              />-->
<!--            </el-icon>-->
<!--            <template #dropdown>-->
<!--              <el-dropdown-menu>-->
<!--                <el-dropdown-item>View</el-dropdown-item>-->
<!--                <el-dropdown-item>Add</el-dropdown-item>-->
<!--                <el-dropdown-item>Delete</el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </template>-->
<!--          </el-dropdown>-->
<!--          <span style="margin-right: 10px" @click="$router.push({-->
<!--          path:'/about',query:{-->
<!--            a:'Option 3'-->
<!--          }-->
<!--          })">半岛铁盒</span>-->
<!--          &lt;!&ndash;          <el-avatar :size="50" :src="circleUrl" />&ndash;&gt;-->
<!--        </div>-->
<!--      </el-header>-->

      <el-main>
        <el-scrollbar>
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import {Menu as IconMenu, Message, Setting} from '@element-plus/icons-vue'

// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles',
// }
// const tableData = ref(Array.from({ length: 20 }).fill(item))
// 富文本组件随时更新已经上传的富文本id

</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

/**
deep改组件
 */

:deep(.el-aside) {
  background: #181818 !important;
}


</style>
