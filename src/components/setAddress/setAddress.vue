<script setup lang="ts">

    import { areaList } from '@vant/area-data'
    import router from "../../router";
    import { ref } from "vue";
    import { showToast } from 'vant';
    const searchResult = ref([]);
    // import type {AddressEditInfo} from 'vant';

    
    const onSave = () => showToast('save');
    const onDelete = () => showToast('delete');

    const onChangeDetail = () => {
        console.log('输入详情地址')
    }

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
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
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
            transform: translate(-50%,-50%);
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