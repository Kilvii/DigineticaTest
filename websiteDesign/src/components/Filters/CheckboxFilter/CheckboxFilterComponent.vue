<script setup>
import { ref, reactive } from 'vue';
import CategoryHeader from '@/components/Filters/CategoryHeader.vue';
import SearchInputComponent from '@/components/SearchInputComponent.vue';
import CheckboxLabelComponent from '@/components/Filters/CheckboxFilter/CheckboxLabelComponent.vue';
const searchInput = ref('');
const attributeItems = reactive(["Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут", "Атрибут"]);

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    btnNeed: {
        type: Boolean,
        default: true,
    },
    searchNeed: {
        type: Boolean,
        default: true,
    }
})
</script>

<template>
    <div class="checkbox-filter">
        <CategoryHeader :title="title" :btnNeed="btnNeed"/>
        <div class="search" v-if="searchNeed">
            <SearchInputComponent v-model.trim="searchInput" placeholder="Поиск" />
        </div>
        <CheckboxLabelComponent :labels="attributeItems" />
    </div>
</template>

<style scoped>
.checkbox-filter {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 10px;
}

.checkbox-filter>*:not(:last-child) {
    margin-bottom: 10px;
}

.search {
    display: flex;
    align-items: center;
    padding: 4px 16px;
    border: 1px solid #AAAAAA;
    border-radius: 4px;
    height: 36px;
    width: 100%;
}
</style>
