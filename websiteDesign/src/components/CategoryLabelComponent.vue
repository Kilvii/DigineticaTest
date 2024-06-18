<script setup>
import { ref, reactive } from 'vue';
import CtAButton from './CtAButton.vue';
const isDropdownOpen = ref(false);
const isHovered = ref(false);
const isActive = ref(false);
function onMouseOver() {
    isHovered.value = true;
}
function onMouseLeave() {
    isHovered.value = false;
}
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
const props = defineProps({
    labels: {
        type: Array,
        required: true,
    },
})
</script>
<!-- :color="isHovered ? 'img_hover' : 'default'" -->
<template>
    <div class="category-label">
        <div class="filter-label">
            <div class="label" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
                <CtA
                    :icon="isDropdownOpen ? '../src/icons/Desktop/Arrow Down.svg' : '../src/icons/Desktop/Arrow Right.svg'"
                    @click="toggleDropdown" />
                <span>Название категории</span>
            </div>
            <span class="counter">{{ labels.length }}</span>
        </div>
        <div class="filter-items">
            <ul v-if="isDropdownOpen" class="dropdown-list">
                <li v-for="item in labels" :key="item.id">
                    {{ item }}
                    <span class="counter">{{ labels.length }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.category-label {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
}

.filter-label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right:10px;
    height: 30px;
    color: #333333;
}

.label{
    display: flex;
    flex-direction: row;
}

.counter {
    display: flex;
    justify-content: flex-end;
    color: #AAAAAA;
}

.filter-items {
    color: #333333;
}

.dropdown-list {
    list-style-type: none;
    padding-left: 0px;
}

.dropdown-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:10px;
    padding-left: 60px;
    height: 30px;
}

.filter-label:hover, .dropdown-list>li:hover{
    color: #7397F5;
    cursor: pointer;
}

</style>
