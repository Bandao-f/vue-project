<template>
  <div class="page">
<!--    <h1>我的文章</h1>-->
    <div class="article">
      <h2 style="text-align: center;">{{ article.title }}</h2>
      <br>
      <p>{{ article.content0 }}</p>
      <br>
      <p>{{ article.content1 }}</p>
      <br>
      <p>{{ article.content2 }}</p>
      <br>
      <p>{{ article.content3 }}</p>
      <br>
      <p>{{ article.content4 }}</p>
      <br>
      <p>{{ article.content5 }}</p>
    </div>
    <div class="illustrations">
      <img v-for="(illustration, index) in illustrations" :key="index" :src="illustration.url" alt="插图" />
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
        content1: "家境困难，生活条件不好，经济压力较大；",
        content2: "高中生身份，面临经济危机，无法满足基本学习和生活需求；",
        content3: "近期承受着巨大的压力，无论是学业、家庭、人际关系或其他方面的压力，感到困顿和无助。",
        content4: "如果你正处于上述情况之一，又或者是我没列举的一些情况，我真切的希望能为你提供一些温暖和支持。",
        content5: "请确保你真正需要帮助，可以联系我的微信tangpengUp。",
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

}

.article {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
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