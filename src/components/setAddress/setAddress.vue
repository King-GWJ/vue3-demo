<script setup lang="ts">

    import {areaList} from '@vant/area-data'
    import {AddressItem, useAddressStore} from "@/stores/address.ts";
    import {ref} from "vue";
    import {showConfirmDialog, showNotify} from 'vant';
    import {useRoute, useRouter} from "vue-router";

    const searchResult = ref([]);
    const addressStore = useAddressStore()
    const router = useRouter()
    const route = useRoute()

    // 根据query的id查找数据，有数据表示是编辑页面，反显到页面
    const addressInfo = ref(addressStore.addressList.find(v => v.id === route.query.id))

    const onSave = (info: AddressItem) => {
        if (addressInfo.value) {
            showNotify({ type: 'success', message: '修改成功！' })
        } else {
            // 新增地址
            addressStore.push(info)
            showNotify({ type: 'success', message: '新增成功！' });
        }
        router.back()
    };

    const onDelete = async () => {
        try {
            await showConfirmDialog({
                title: '警告',
                message:
                    '确定要删除此地址吗？',
            })
            addressStore.del(addressInfo.value!.id)
            showNotify({type: 'success',message: '删除成功'})
            router.back()
        } catch(e) {
            showNotify({type: 'warning',message: '取消删除'})
        }
    };

</script>

<template>
    <div>
        <header>
            <van-icon @click="router.back()" class="icon" size="25" name="arrow-left" />
            <span>编辑地址</span>
        </header>
        <main>
            <van-address-edit
                :area-list="areaList"
                :show-delete="!!addressInfo"
                show-set-default
                show-search-result
                :address-info="addressInfo"
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
            />
        </main>
    </div>
</template>

<style scoped lang="scss">
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
            transform: translate(-50%, -50%);
        }
    }

    main {
        margin-top: 20px;

        button {
            width: 100%;
            height: 60px;
            background-color: #ffffff;
            color: #ff5f16;
            font-size: 18px;
            line-height: 60px;
            text-align: center;
            border: 1px solid #ededed;
            box-shadow: 2px 0px 5px #ededed;
            margin-top: 20px;
        }
    }
</style>