<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>

export default {
  created() {
    /**
     * 传参拿值
     */
    console.log(this.$route.query)
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
