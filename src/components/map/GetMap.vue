<script setup>
    import {onMounted, ref} from "vue";

    const container = ref()

    onMounted(() => {
        const map = new BMapGL.Map(container.value);
        map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);
        map.enableScrollWheelZoom(true);
        map.setHeading(64.5);
        map.setTilt(73);
    })
</script>

<template>
    <div id="container" ref="container"></div>
</template>

<style scoped lang="scss">
    #container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>