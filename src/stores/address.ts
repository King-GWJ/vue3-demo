
import {computed, ref} from "vue";
import { defineStore } from 'pinia'

export interface AddressItem {
    id: string;
    name: string;
    tel: string;
    address: string;
    province: string;
    city: string;
    county: string;
    addressDetail: string;
}

export const useAddressStore = defineStore('address', () => {
    // 选中的地址id
    const chosenAddressId = ref('')
    // 地址列表
    const addressList  = ref<AddressItem[]>([])
    // 根据id和地址列表查找当前选中的数据
    const currentAddress = computed(() => {
        const current = addressList.value.find(v => v.id === chosenAddressId.value)
        return current ? current.address : '请选择配送地址'
    })
    const push = (info: AddressItem) => {
        addressList.value.push({
            ...info,
            id: Date.now() + '',
            address: `${info.province} ${info.city} ${info.county} ${info.addressDetail} `
        })
    }
    const del = (id: string) => {
        // 根据传入的id查找下标
        const index = addressList.value.findIndex(v => v.id === id)
        addressList.value.splice(index, 1)
    }

    return{
        chosenAddressId,
        currentAddress,
        addressList,
        push,
        del
    }
})
