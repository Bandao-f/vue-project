<template>
  <VueWaterfall3 :items="items" :options="waterfallOptions">
    <template #item="{ item }">
      <!-- 这里是每个项目的内容 -->
    </template>
  </VueWaterfall3>
</template>

<script>
import { ref } from 'vue';
import VueWaterfall3 from 'vue-waterfall3';
import 'vue-waterfall3/dist/style.css';

export default {
  components: {
    VueWaterfall3,
  },
  setup() {
    const items = ref([
      // 数据源
    ]);

    const waterfallOptions = ref({
      // 瀑布流选项
      // 可以根据需要进行配置，详细选项可以参考官方文档
    });

    return {
      items,
      waterfallOptions,
    };
  },
};
</script>