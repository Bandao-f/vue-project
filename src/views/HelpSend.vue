<template>
  <div class="page">
<!--    <h1>我的文章</h1>-->
    <div style="margin: 0 auto; height: 100vh">
      <div class="article">
        <h1 style="font-size:2em;font-weight: bold;">{{ article.title }}</h1>
        <p class="content">{{ article.content0 }}</p>
        <p class="content">&nbsp;&nbsp;{{ article.content1 }}</p>
        <p class="content">&nbsp;&nbsp;{{ article.content2 }}</p>
        <p class="content">&nbsp;&nbsp;{{ article.content3 }}</p>
        <p class="content">&nbsp;&nbsp;{{ article.content4 }}</p>
      </div>
      <el-input style="margin-bottom: 5px;width: 66%;padding-left: 0" v-model="inputValue" placeholder="输入你的支付宝账号~"></el-input>
      <el-button class="custom-btn" :disabled="isDisabled" @click="handleClick">
        {{ buttonText }}
      </el-button>
      <el-dialog
          v-model="dialogVisible"
          title="我已经收到请求啦~ 等我看见消息以后就会给你转个小红包，你迟一些你再去看叭~"
          width="46%"
          :before-close="beforeDialogClose"
      >
        <span slot="footer"  class="dialog-footer align-right">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
      </el-dialog>
      <br style="margin-bottom: 10px;">
      <div class="line"></div>
      <div class="article">
        <h1 style="font-size:2em;font-weight: bold;">联系我</h1>
        <p class="content">&nbsp;&nbsp;{{ article.content6 }}</p>
        <p class="content">&nbsp;&nbsp;{{ article.content7 }}</p>
      </div>
      <img src="../assets/wechat.jpg" width="200">

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.isDisabled = true;
      this.buttonText = '我收到请求啦~';
      this.request()
      this.openDialog()
    },
    request() {
      fetch('http://localhost:8088/transController/reportAlipay?param='+this.inputValue)
          .then(response => response.json())
          .then(data => {
            // 在这里处理返回的数据
            console.log(data);
          })
          .catch(error => {
            // 处理错误
            console.error(error);
          });
    },
    openDialog() {
      this.dialogVisible = true; // 打开对话框
    },
    handleConfirm() {
      // 处理确认按钮的操作
      // 可以在这里调用其他方法或执行其他操作
      this.dialogVisible = false; // 关闭对话框
      // 其他逻辑...
    },
    beforeDialogClose(done) {
      // 在对话框关闭之前的处理逻辑
      // done是一个回调函数，调用它来继续关闭对话框
      // 可以在这里执行额外的逻辑操作
      done(); // 继续关闭对话框
    }
  },
  data() {
    return {
      isDisabled: false,
      dialogVisible: false, // 对话框可见性
      buttonText: '点击我我就会去发支付宝红包~',
      inputValue:'',
      article: {
        title: "请确定你真的需要",
        content0: "如果你正面临以下情况:",
        content1: "1、家境困难，生活条件不好，经济压力较大；",
        content2: "2、高中生身份，面临经济危机，无法满足基本学习和生活需求；",
        content3: "3、近期承受着巨大的压力，无论是学业、家庭、人际关系或其他方面的压力，感到困顿和无助。",
        content4: "如果你正处于上述情况之一，又或者是我没列举的一些情况，我真切的希望能为你提供一些温暖和支持。",
        content6: "如果你有任何需求、倾诉：",
        content7: "微信：tangpengUp",
      },
      illustrations: [
        {
          // url: "插图1的URL",
        }
      ],
    };
  },
};
</script>

<style>
.align-right {
  display: flex;
  justify-content: flex-end;
}
.custom-btn {
  background-color: blue;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 5px;
  margin-left: 5px;
}

.custom-btn:hover {
  background-color: black;
}
.page {
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top:20px;
  height: 100vh;
}
.line {
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.4);
}
.content{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.article {
  background-color: #ffffff;
  //padding: 50px;
  border-radius: 4px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //position: absolute;
  //top: 30px;
  //left: 400px;
  right: 0;
  bottom: 0;
  //margin-left:500px;

}

.article h2 {
  margin-top: 0;
}

.illustrations {
  display: flex;
  justify-content: center;
}

.illustrations img {
  max-width: 300px;
  margin: 10px;
  border-radius: 4px;
}
</style>