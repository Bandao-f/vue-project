<template>
  <div class="blog">
    <h1>Welcome to My Blog!</h1>
    <el-avatar :size="50" :src="circleUrl" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    aaa(){
      // const  a = ;
      // this.asd = a;
    }
  },
  data() {
    return {
      asd:'',
      circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
          'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      posts: [
        {
          id: 1,
          title: 'First Post',
          content: 'This is the content of the first blog post.',
        },
        {
          id: 2,
          title: 'Second Post',
          content: 'This is the content of the second blog post.',
        },
        {
          id: 3,
          title: 'Third Post',
          content: 'This is the content of the third blog post.',
        },
      ],
    };
  },
};
</script>

<style>

.blog {
  text-align: center;
}

h1 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h2 {
  color: #555;
}

p {
  color: #777;
}
</style>