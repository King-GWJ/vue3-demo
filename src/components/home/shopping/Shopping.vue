<script setup lang="ts">
    import {ref} from "vue";
    import {useGoodsStore} from "@/stores/goods.ts";

    const checked = ref(['a', 'b']);
    const goodsStore = useGoodsStore()
    const max = () => {
        console.log('ggg','ss','123')
    }
</script>

<template>
    <div class="shopping">
        <van-nav-bar title="购物车" />
        <van-checkbox-group v-model="checked" ref="checkboxGroup">
            <van-checkbox
                v-for="item in goodsStore.cartList"
                :name="item.id"
                class="checkbox">
                <van-card
                    class="canCard"
                    :price="item.price"
                    :title="item.name"
                    :thumb="item.imgUrl">
                    <template #footer>
                        <div class="controls">
                            <van-button
                                class="vanButton"
                                @click.stop="console.log('ggg')"
                                size="mini">
                                <van-icon name="minus" />
                            </van-button>
                            <span class="quantity">100</span>
                            <van-button
                                class="vanButton"
                                @click.stop="max"
                                size="mini">
                                <van-icon name="plus" />
                            </van-button>
                        </div>
                    </template>
                </van-card>
            </van-checkbox>
        </van-checkbox-group>

    </div>
</template>

<style>
    .shopping {
        width: 100%;
        background: #f7f8fa;

        .checkbox {
            border-radius: 5px;
            background-color: white;
            margin: 15px;

            .van-checkbox__label {
                flex: 1;
            }

            .canCard {
                background-color: white;

                .controls {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .quantity {
                        margin: 0 5px;
                    }

                    .vanButton {
                        width: 30px;
                        height: 20px;
                        margin: 0;
                    }
                }
            }
        }


    }

</style>