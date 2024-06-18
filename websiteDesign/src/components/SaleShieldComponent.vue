<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="sale-wrap">
        <span>25%</span>
    </div>
</template>

<style scoped>
.sale-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    height: 32px;
    background-color: #7397F5;
    border-radius: 4px;
}

span {
    color: #FFFFFF
}
</style>