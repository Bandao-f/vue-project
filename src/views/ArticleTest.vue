<template>
  <div>
    <el-button type="primary" @click="openEditorDialog">打开富文本编辑器</el-button>
    <el-dialog :visible.sync="editorVisible" title="富文本编辑器">
      <div ref="editorContent"></div>
      <div slot="footer">
        <el-button type="text" @click="closeEditorDialog">取消</el-button>
        <el-button type="primary" @click="saveEditorContent">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ElButton, ElInput, ElDialog } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Editor from 'wangeditor';
export default {
  data() {
    return {
      editorVisible: false,
      editor: null
    };
  },
  mounted() {
    this.editor = new Editor(this.$refs.editorContent);
    this.editor.config.placeholder = '请输入内容';
    // 可根据需求配置其他富文本编辑器的配置项

    // 使用 Element Plus 提供的事件绑定方法，将编辑器的内容保存到文本框中
    this.editor.customConfig.onchange = (html) => {
      this.$refs.editorContent.innerHTML = html;
    };
  },
  methods: {
    openEditorDialog() {
      this.editorVisible = true;
    },
    closeEditorDialog() {
      this.editorVisible = false;
    },
    saveEditorContent() {
      // 在这里处理保存编辑器内容的逻辑
      console.log(this.$refs.editorContent.innerHTML);

      this.closeEditorDialog();
    }
  }
}
</script>