<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>

<template>
    <div class="box">
        <div class="position" @click="router.push({path: '/getAddress'})">
            <van-icon name="location-o" />
            <span>送至：请选择配送地址</span>
            <van-icon name="arrow" color="#999999" />
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<style scoped lang="scss">

    .box{
        width: 100%;
        .position {
            width: 100%;
            margin: 20px;
        }
        .my-swipe .van-swipe-item{
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }
    }

</style>