<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router'

    const router = useRouter()
    const chosenAddressId = ref('1');
    const list = [
        {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
        },
        {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
            isDefault: false
        },
    ];

    const onAdd = () => router.push({path: '/setAddress'});

</script>

<template>
    <div class="admin">
        <header>
            <header>
                <van-icon @click="router.go(-1)" class="icon" size="25" name="arrow-left" />
                <span>请选择</span>
            </header>
        </header>
        <main>
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text="默认"
                @add="onAdd" />
        </main>
    </div>
</template>

<style scoped lang="scss">
    .admin {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        header {
            width: 100%;
            height: 50px;
            display: flex;
            position: relative;
            border-bottom: 1px solid #ededed;

            .icon {
                width: 40px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }

        main {
            flex: 1;
            width: 100%;
            height: 100%;
            background: #f7f8fa;

        }
    }
</style>