<template>
  <div class="page">
<!--    <h1>我的文章</h1>-->
    <div class="article">
      <h1 style="font-size:2em;font-weight: bold;">{{ article.title }}</h1>
      <p class="content">{{ article.content0 }}</p>
      <p class="content">&nbsp;&nbsp;{{ article.content1 }}</p>
      <p class="content">&nbsp;&nbsp;{{ article.content2 }}</p>
      <p class="content">&nbsp;&nbsp;{{ article.content3 }}</p>
      <p class="content">&nbsp;&nbsp;{{ article.content4 }}</p>
    </div>
<!--    <div class="illustrations">-->
<!--      <img v-for="(illustration, index) in illustrations" :key="index" :src="illustration.url" alt="插图" />-->
<!--    </div>-->
    <div class="line"></div>
    <div class="article">
      <h1 style="font-size:2em;font-weight: bold;">联系我</h1>
      <p class="content">&nbsp;&nbsp;{{ article.content6 }}</p>
      <p class="content">&nbsp;&nbsp;{{ article.content7 }}</p>
<!--      <p class="content">&nbsp;&nbsp;{{ // article.content4 }}</p>-->
<!--      <p class="content">&nbsp;&nbsp;{{ article.content5 }}</p>-->
      <img src="../assets/wechat.jpg" width="200">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:20px;
  height: 100vh;
}
.line {
  width: 100%;
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