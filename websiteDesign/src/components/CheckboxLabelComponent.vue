<script setup>
import { ref, reactive } from 'vue';
import CheckboxComponent from './CheckboxComponent.vue';
const props = defineProps({
    labels: {
        type: Array,
        required: true,
    },
})
</script>
<!-- :color="isHovered ? 'img_hover' : 'default'" -->
<template>
    <div class="container">
        <div class="filter-items">
            <ul class="scrollable-list">
                <li v-for="item in labels" :key="item.id">
                    <div class="label">
                        <CheckboxComponent />
                        <span>{{ item }}</span>
                    </div>
                    <span class="counter">{{ labels.length }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.filter-items {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.label{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.label>*:not(:last-child) {
    margin-right: 10px;
}

.counter {
    display: flex;
    justify-content: flex-end;
    color: #AAAAAA;
}

.scrollable-list {
    list-style-type: none;
    padding-left: 0px;
    width: 100%;
    max-height: 180px;
    overflow-y: auto;
    scrollbar-width: thin;
}

.scrollable-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 0px;
    height: 30px;
    color: #333333;
}
</style>
