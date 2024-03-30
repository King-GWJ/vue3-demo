import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/home/Home.vue";
import Distribution from "../components/home/distribution/Distribution.vue";
import Shopping from "../components/home/shopping/Shopping.vue";
import Mine from "../components/home/mine/Mine.vue";
import GetAddress from "../components/getAddress/getAddress.vue";
import SetAddress from "../components/setAddress/setAddress.vue";
import GetMap from "../components/map/GetMap.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/home/distribution',
            children: [
                {
                    path: '/home/distribution',
                    name: 'distribution',
                    component: Distribution,
                    meta: {
                        title: '配送到家'
                    },
                },
                {
                    path: '/home/shopping',
                    name: 'shopping',
                    component: Shopping,
                    meta: {
                        title: '购物车'
                    },
                },
                {
                    path: '/home/mine',
                    name: 'mine',
                    component: Mine,
                    meta: {
                        title: '我的'
                    },
                },
            ]
        },
        {
            path: '/getAddress',
            name: 'getAddress',
            component: GetAddress,
            meta: {
                title: '派送地址'
            },
        },
        {
            path: '/setAddress',
            name: 'setAddress',
            component: SetAddress,
            meta: {
                title: '地址设置'
            },
        },
        {
            path: '/map',
            name: 'GetMap',
            component: GetMap,
            meta: {
                title: '百度地图'
            },
        }
    ]
})
// 全局前置守卫(拦截)
router.beforeEach((to, from, next) => {
    // to: 跳转的目标路由，到哪去
    // from: 来源路由，从哪来
    // console.log('to', to)
    // 根据路由元信息修改 title
    document.title = to.meta.title || 'App'
    // 根据路由元信息判断此路由是否需要登录
    // to.matched: 当前路由的所有层级

    // 继续执行
    next()
})
export default router