<script setup>
import { ref } from 'vue';
import CtAButton from './CtAButton.vue';

const checked = defineModel()

</script>

<template>
    <div class="input-wrap">
        <input type="checkbox" class="checkbox" v-model="checked" />
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
}

.checkbox {
    width: 100%;
    height: 100%;
}

.input-wrap:hover {
    color: #7397F5;
    cursor: pointer;
}
</style>