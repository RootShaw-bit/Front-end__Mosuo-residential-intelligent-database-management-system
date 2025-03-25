<script setup>
import {ref} from 'vue'
let bannerlist=ref([
  {id:1,img_url:'bannerI.jpg'},
  {id:2,img_url:'bannerII.jpg'},
  {id:3,img_url:'bannerIII.jpg'},
])

</script>

<template>
  <div class="banner">
    <div class="banner-list">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in bannerlist" :key="item.id">
          <img :src="`/src/assets/images/${item.img_url}`" alt="">
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>

</template>

<style scoped>

</style>