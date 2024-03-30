import axios from 'axios'
import Mock from 'mockjs'
import {defineStore} from "pinia";
import {ref} from "vue";

const data = Mock.mock({
    "list|48": [
        {
            "id": "@id",
            "name": "@cname",
            "price|10-50.2": 10,
            "imgUrl": "@image(100x100, @color, @text)",
            "checked": false,
            "images|4-8": ["@image(375x300, @color, @title)"]
        }
    ]
})

// 模拟接口
Mock.mock('/api/list', () => {
    return data.list
})

export interface GoodsItem {
    checked: boolean;
    id: string;
    images: string[];
    imgUrl: string;
    name:string;
    price: number;
}

export type Goods = GoodsItem & { count?: number }

export const useGoodsStore = defineStore("goods",()=>{
    const goodsList = ref<GoodsItem[]>([]) // 商品列表
    const cartList = ref<GoodsItem[]>([]) // 购物车列表

    //获取列表数据
    const setGoodsList = async () => {
        const res = await axios.get<GoodsItem[]>('/api/list')
        goodsList.value = res.data
    }

    //添加购物车
    const changeCount = (id: string) => {
        // 根据id去购物车中查找
        const item = goodsList.value.find(v => v.id === id)!
        cartList.value.push({
            ...item,
            count: 1
        })
        console.log("ggg",cartList)

    }

    return{
        goodsList,
        cartList,
        setGoodsList,
        changeCount
    }
})

