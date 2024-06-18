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
    <div class="header">
        <span>{{ title }}</span>
        <ClearButtonComponent v-if="btnNeed"/>
    </div>
</template>

<style scoped>
.header {
    /* padding: 10px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

span {
    color: #333333;
    font-weight: 600;
}
</style>