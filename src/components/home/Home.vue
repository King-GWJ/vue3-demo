<script setup lang="ts">
    import {ref} from 'vue';
    import {useGoodsStore} from "@/stores/goods.ts";

    const goodsStore = useGoodsStore()

    const active = ref("distribution");

</script>

<template>
    <div class="home">
        <main class="home-main">
            <RouterView />
        </main>
        <footer class="home-footer">
            <van-tabbar v-model="active" active-color="#3c8bf2">
                <van-tabbar-item name="distribution" icon="wap-home" to="/home/distribution">配送到家</van-tabbar-item>
                <van-tabbar-item name="shopping" icon="shopping-cart" :badge="goodsStore.cartList.length" to="/home/shopping">购物车</van-tabbar-item>
                <van-tabbar-item name="mine" icon="manager" dot to="/home/mine">我的</van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>

<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .home-main {
            flex: 1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: scroll;
            display: flex;
        }

        .home-footer {
            height: 49px;
            border-top: 1px solid #ededed;
        }

    }
</style>