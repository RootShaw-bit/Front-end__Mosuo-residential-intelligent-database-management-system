<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// 使用 vue-router
const router = useRouter();

// 上传的文件列表
const fileList = ref([]);

// 用于展示预测结果
const predictedResult = ref(null);

// 控制上传的状态
const uploading = ref(false);

// 上传前的验证函数
const beforeUpload = (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    alert("只能上传图片!");
  }
  return isImage;
};

// 上传成功后的回调，获取接口响应
const handleSuccess = (response, file, fileList) => {
  console.log("上传成功，接口返回的数据:", response);
  predictedResult.value = response; // 将响应数据存储在 predictedResult 中
};

// 上传失败后的回调
const handleError = (error, file, fileList) => {
  console.error("上传失败", error);
  alert("上传失败，请重试");
};

</script>

<template>
  <div class="container_bg">
    <div class="building">
      <div class="building_title">
        <h3>智能识别</h3>
      </div>

      <!-- 上传图片区域 -->
      <div class="upload-container">
        <el-upload
          class="upload-demo"
          action="http://localhost:5000/predict"  
          :before-upload="beforeUpload"
          :on-change="handleUpload"
          accept="image/*"
          :file-list="fileList"
          list-type="picture-card"
          :on-success="handleSuccess" 
          :on-error="handleError"     
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <!-- 显示上传的图片 -->
        <div v-if="fileList.length > 0">
          <img
            :src="fileList[0].url"
            alt="uploaded image"
            style="max-width: 200px; margin-top: 10px"
          />
        </div>
      </div>

      <!-- 显示预测结果 -->
      <div v-if="predictedResult" class="result-container">
        <h4>预测结果:</h4>
        <p>
          <strong>预测城市:</strong>
          {{ predictedResult.predicted_city }} (置信度:
          {{ predictedResult.city_confidence }})
        </p>
        <p>
          <strong>预测建筑类型:</strong>
          {{ predictedResult.predicted_building }} (置信度:
          {{ predictedResult.building_confidence }})
        </p>
      </div>

      <!-- 显示加载中的状态 -->
      <div v-if="uploading" class="loading-overlay">
        <span>正在处理，请稍等...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container_bg {
  padding: 20px;
}

.building {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.building_title h3 {
  text-align: center;
  margin-bottom: 20px;
}

.upload-container {
  text-align: center;
  margin-bottom: 20px;
}

.result-container {
  margin-top: 20px;
  text-align: center;
}

.result-container p {
  font-size: 16px;
  line-height: 1.5;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
