<script setup lang="ts">
    import {useRouter} from 'vue-router'
    import {AddressItem, useAddressStore} from "@/stores/address.ts";

    const router = useRouter()

    //地址数据信息
    const addressStore = useAddressStore()

    const onEdit = (item: AddressItem) => {
        router.push({
            path: '/setAddress',
            query: {
                id: item.id
            }
        })
    }
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
            <van-empty v-if="addressStore.addressList.length === 0" class="empty" description="当前还没有地址，快去新增地址吧" />
            <van-address-list
                v-model="addressStore.chosenAddressId"
                :list="addressStore.addressList"
                default-tag-text="默认"
                @add="router.push({path: '/setAddress'})"
                @edit="onEdit"
            />
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