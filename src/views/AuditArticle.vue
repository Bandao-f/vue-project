<template>
  <div>
    <H1>预览</H1>
    <div v-html="title" style="border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);height: 200px;margin-bottom: 20px;">
    </div>
    <j-editor v-model="title">
    </j-editor>
    <button @click="saveArticle">保存文章</button>

<!--    <el-button type="primary" @click="openEditorDialog">打开富文本编辑器</el-button>-->
<!--    <el-row>-->
<!--      <el-col :span="18">-->
<!--        <el-input placeholder="请输入文章标题" v-model="title"></el-input>-->
<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <el-button type="primary" @click="saveArticle">保存文章</el-button>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <br>-->
<!--    <el-row>-->
<!--      <el-col :span="24">-->
<!--        <el-input-->
<!--            type="textarea"-->
<!--            :rows="10"-->
<!--            placeholder="请输入文章内容"-->
<!--            v-model="content"-->
<!--        ></el-input>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <br>-->
<!--    <el-row>-->
<!--      <el-col :span="24">-->
<!--        <el-button type="primary" @click="formatContent">格式化内容</el-button>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
import JEditor from "@/views/j-editor.vue";

export default {
  components: {JEditor},
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    saveArticle() {
      const article = {
        title: this.title,
        content: this.content
      };
      // 在这里处理保存文章的逻辑
      fetch('http://localhost:8088/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      }).then(data => {
            // 在这里处理返回的数据
            console.log(data);
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
      console.log('保存文章', this.title, this.content);
    },
    formatContent() {
      // 在这里处理格式化内容的逻辑
      console.log('格式化内容', this.content);
    }
  }
};
</script>