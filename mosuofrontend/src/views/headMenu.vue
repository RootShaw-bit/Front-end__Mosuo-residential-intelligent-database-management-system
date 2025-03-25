<script setup>
import {ref} from 'vue'
import {Search} from "@element-plus/icons-vue"
import {reactive} from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
import {useSharedStore} from  "@/store/index"
const router = useRouter();
const store = useSharedStore();
const search = reactive({name:null})
let headlist = ref([
  {title:'首页',path:'/index'},
  {title:'建筑',path:'/building'},
  {title:'结果',path:'/result'},
])

const toSearch = () => {
  if(search.name){
    if(search.name===''){
      return
    }
    store.setSearch(search.name);
    console.log(store.search);
    // 跳转到结果页面
    router.push({ name: 'result' }); 
  }
}

</script>

<template>
  <div class ="head">
    <div class="header-list">
      <div class="header-top">
        <div class="logo">
          <router-link to="/" title="首页"></router-link>
         </div>
        <ul class="header-menu">
          <li v-for="(v,i) in headlist" :key="i">
            <router-link :to="v.path">
             <span>{{v.title}}</span>
            </router-link>
          </li>
        </ul>
        <div class="header-right">
          <!-- 搜索框 -->
          <el-input style="width: 240px" v-model="search.name" placeholder="search" prefix-icon="Search"></el-input>
          <!-- 搜索按钮 -->
          <el-button @click="toSearch" type="primary" >搜索</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>