<script setup>
import { ref, reactive } from 'vue';
import FacetPriceInputComponent from '@/components/FacetPriceInputComponent.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';

</script>

<template>
    <div class="slider-filter">
        <CategoryHeader title="Цена" :btnNeed=false />
        <div class="filter">
            <FacetPriceInputComponent />
            <img class="divider" src="@/icons/Desktop/Divider.svg" alt="btn-icon" />
            <FacetPriceInputComponent prefix="до" />
        </div>
    </div>

</template>

<style scoped>
.slider-filter{
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 10px;
}

.slider-filter>*:not(:last-child) {
    margin-bottom: 10px;
}

.filter {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.filter>*:not(:last-child) {
    margin-right: 10px;
}

.divider {
    width:10px;
}
</style>
