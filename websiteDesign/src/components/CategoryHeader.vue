<script setup>
import { ref } from 'vue';
import ClearButtonComponent from './ClearButtonComponent.vue'

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    btnNeed: {
        type: Boolean,
        default: true,
    }
})

</script>

<template>
    <div class="header-button" v-if="btnNeed">
        <span>{{ title }}</span>
        <ClearButtonComponent />
    </div>
    <div class="header" v-else=>
        <span>{{ title }}</span>
    </div>
</template>

<style scoped>
.header-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

span {
    color: #333333;
    font-weight: 600;
}
</style>