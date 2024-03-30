<script setup lang="ts">
    import {useRouter} from 'vue-router'
    import {useAddressStore} from "@/stores/address.ts";
    import {onMounted, ref} from "vue";
    import {useGoodsStore} from "@/stores/goods.ts";
    import {showNotify} from "vant";

    const router = useRouter()
    const addressStore = useAddressStore()
    const goodsStore = useGoodsStore()
    const tabIndex = ref(0)

    onMounted(()=>{
        goodsStore.setGoodsList()
    })

    const add = (id: string) => {
        // 调用store中的方法修改商品数量
        goodsStore.changeCount(id)
        showNotify({ type: 'success', message: '添加成功！' })
    }
</script>

<template>
    <div class="distribution">
        <div class="position" @click="router.push({path: '/getAddress'})">
            <van-icon name="location-o" />
            <span>送至：{{ addressStore.currentAddress }}</span>
            <van-icon name="arrow" color="#999999" />
        </div>
        <van-tabs v-model:active="tabIndex" shrink line-width="55px">
            <van-tab class="vanTab" title="多点超市">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <van-grid :border="false" :column-num="4" class="vanGrid">
                    <van-grid-item
                        v-for="item in goodsStore.goodsList"
                        :key="item.id"
                        class="gridItem">
                        <div class=gridItem-content>
                            <van-image
                                width="80px"
                                height="80px"
                                fit="cover"
                                :src="item.imgUrl" />
                            <h3>{{ item.name }}</h3>
                            <span>¥{{ item.price }}</span>
                            <van-button
                                class="vanButton"
                                size="mini"
                                @click="add(item.id)">
                                <van-icon name="plus" />
                            </van-button>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab class="vanTab" title="全球精选">
                <button @click="router.push({path: '/map'})">跳转map</button>
            </van-tab>
        </van-tabs>

    </div>
</template>

<style scoped lang="scss">

    .distribution {
        width: 100%;
        .position {
            width: 100%;
            margin: 20px;
        }

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }

        .vanTab {
            padding-top: 15px;
        }
    }

    .vanGrid {
        .gridItem {
            --van-grid-item-content-padding: 0px;

            .gridItem-content {
                margin-top: 10px;
                width: 80px;
                display: flex;
                align-items: center;
                flex-direction: column;

                .vanButton {
                    width: 100%;
                    margin: 0;
                    height: 20px;
                }
            }
        }
    }


</style>