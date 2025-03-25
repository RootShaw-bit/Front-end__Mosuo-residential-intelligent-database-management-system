<template>
  <div class="building-info">
    <h1>建筑信息</h1>

    <!-- 如果数据存在，展示建筑信息 -->
    <div v-if="building">
      <p><strong>建筑ID:</strong> {{ building.buildingId }}</p>
      <p><strong>建筑类型:</strong> {{ building.buildingType }}</p>
      <p><strong>建筑用途:</strong> {{ building.buildingUsage }}</p>
      <p><strong>结构:</strong> {{ building.structure || '未知' }}</p>
      <p><strong>朝向:</strong> {{ building.orientation || '未知' }}</p>
      <p><strong>楼层数:</strong> {{ building.floors || '未知' }}</p>
      <p><strong>建筑完成日期:</strong> {{ building.buildingCompletionDate || '未知' }}</p>
    </div>

    <!-- 如果没有数据，展示加载中 -->
    <div v-else>
      <p>加载中...</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useSharedStore } from '@/store/index';

const store = useSharedStore();
console.log(store);

const building = ref(null);  // 存储从接口获取到的数据

// 在组件挂载时请求数据
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/building/search', {
      params: { buildingType: store.search },
    });

    // 假设接口返回的数据是数组，我们取第一个元素
    if (response.data.length > 0) {
      building.value = response.data[0];
    }
  } catch (error) {
    console.error('获取建筑信息失败:', error);
  }
});
</script>

<style scoped>
.building-info {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 90px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
</style>
