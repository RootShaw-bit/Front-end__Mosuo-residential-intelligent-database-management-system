import {createRouter , createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',     //首页
        redirect:'/index'
    },

    {
        path:'/index',     //首页
        name:'index',      //名字
        component:()=>import('../views/index/index.vue')
    },

    {
        path:'/building',     //建筑
        name:'building',      //名字
        component:()=>import('../views/building/building.vue')
    },

    {
        path:'/result',     //结果
        name:'result',      //结果
        component:()=>import('../views/result/result.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router