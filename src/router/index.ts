import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/home/Home.vue";
import Distribution from "../components/home/distribution/Distribution.vue";
import Sort from "../components/home/sort/Sort.vue";
import Member from "../components/home/member/Member.vue";
import Shopping from "../components/home/shopping/Shopping.vue";
import Mine from "../components/home/mine/Mine.vue";
import GetAddress from "../components/getAddress/getAddress.vue";
import SetAddress from "../components/setAddress/setAddress.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name:'home',
            component:Home,
            redirect:'/home/distribution',
            children:[
                {
                    path: '/home/distribution',
                    name:'distribution',
                    component:Distribution,
                },
                {
                    path: '/home/sort',
                    name: 'sort',
                    component: Sort
                },
                {
                    path: '/home/member',
                    name: 'member',
                    component: Member
                },
                {
                    path: '/home/shopping',
                    name: 'shopping',
                    component: Shopping
                },
                {
                    path: '/home/mine',
                    name: 'mine',
                    component: Mine
                },
            ]
        },
        {
            path: '/getAddress',
            name: 'getAddress',
            component: GetAddress
        },
        {
            path: '/setAddress',
            name: 'setAddress',
            component: SetAddress
        }
    ]
})

export default router