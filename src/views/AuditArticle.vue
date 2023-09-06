<template>
  <div>
    <el-row>
      <el-col :span="18">
        <el-input placeholder="请输入文章标题" v-model="title"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="saveArticle">保存文章</el-button>
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col :span="24">
        <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入文章内容"
            v-model="content"
        ></el-input>
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="formatContent">格式化内容</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    saveArticle() {
      // 在这里处理保存文章的逻辑
      console.log('保存文章', this.title, this.content);
    },
    formatContent() {
      // 在这里处理格式化内容的逻辑
      console.log('格式化内容', this.content);
    }
  }
};
</script>