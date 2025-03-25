<script setup>
import {ref} from 'vue'

</script>

<template>
<div class="container_bg">
  <div class="Indexbuilding">
    <div class="index_title">
      <h3>主要建筑</h3>
      <p>四大类建筑</p>
    </div>
    <div class="Indexbuilding-list">
      <ul>
        <li>
          <div class="Indexbuilding-card">
            <a href="#">
              <div class="Indexbuilding-img">
                <img src="@/assets/images/grandmahouse.jpg" alt="">
              </div>
              <div class="Indexbuilding-box">
                <h3>祖母屋：摩梭民居的心脏</h3>
              </div>
              <div class="Indexbuilding-hover">
                <span>查看详情</span>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="Indexbuilding-card">
            <a href="#">
              <div class="Indexbuilding-img">
                <img src="@/assets/images/hualou.jpg" alt="">
              </div>
              <div class="Indexbuilding-box">
                <h3>花楼：母系血脉的延续</h3>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="Indexbuilding-card">
            <a href="#">
              <div class="Indexbuilding-img">
                <img src="@/assets/images/jt.jpg" alt="">
              </div>
              <div class="Indexbuilding-box">
                <h3>经堂：摩梭人们的信仰</h3>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class="Indexbuilding-card">
            <a href="#">
              <div class="Indexbuilding-img">
                <img src="@/assets/images/siheyuan.jpg" alt="">
              </div>
              <div class="Indexbuilding-box">
                <h3>草楼</h3>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<style scoped>

</style>