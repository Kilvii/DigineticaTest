<script setup>
import { reactive } from 'vue';
import CategoryLabelComponent from './CategoryLabelComponent.vue';
const dropdownItems = reactive(["Название категории 1", "Название категории 2", "Название категории 3"]);
</script>

<template>
    <CategoryLabelComponent :labels="dropdownItems"/>
</template>

<style scoped>
</style>
