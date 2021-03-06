import VueRouter from "vue-router";
import Vue from 'vue';


Vue.use(VueRouter);

const routes = [
    // {
    //     path: '/friend/:id',
    //     name: 'friend',
    //     //重定向
    //     // redirect: '/friend/:id',
    //     //别名
    //     alias: '/home/:id',
    //     component: () => import('../components/home.vue')
    // },
    // {
    //     path: '/avatar/:index',
    //     name: 'avatar',
    //     component: () => import('../components/avatar.vue'),
    //     //1. props: true
    //     // route.params 将会被设置为组件属性。

    //     //2.也可以直接使用对象，直接赋值到组件的属性上
    //     // props: {
    //     //     test: 'test',
    //     //     val: 'val'
    //     // }

    //     //3。使用函数
    //     props: (route) => ({index: route.params.index})
    // },
    {
        //专辑详情界面
        path: '/ablum',
        component: () => import('../pages/albumPage.vue')
    },
    {
        path: '/playList',
        component: () => import('../pages/playListPage.vue')
    },
    {
        path: '/more',
        component: () => import('../pages/more.vue'),
        children: [
            {
                path: 'playListMore',
                component: () => import('../pages/playListMore')
            },
            {
                path: 'newDishesMore',
                component: () => import('../pages/newDishesMore')
            }
        ]

    },
    {
        path: '/songDetail',
        component: () => import('../pages/songInfoPage.vue')
    },
    {
        path: '/rank',
        component: () => import('../pages/rankPage.vue')
    },
    {
        //未匹配路径默认页面
        path: '*',
        component: () => import('../pages/homePage.vue')
    }

]


export const router = new VueRouter({
    routes,
    mode: 'history'
})


//全局前置守卫
// router.beforeEach((to, from, next) => {

//     next();

// })