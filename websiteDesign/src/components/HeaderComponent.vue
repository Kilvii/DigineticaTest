<script setup>
import { ref } from 'vue';
import CtAButton from './CtAButton.vue';
import SearchInputComponent from './SearchInputComponent.vue';

const searchInput = ref('');
</script>

<template>
    <div class="header-bar">
        <div class="logo">
            <img class="icon" src="@/icons/Desktop/Logo.svg" alt="Logo icon">
            <span>Логотип</span>
        </div>
        <div class="catalog">
            <span>Каталог</span>
        </div>
        <div class="search">
            <img class="icon" src="@/icons/Desktop/Search.svg" alt="Search icon">
            <SearchInputComponent v-model.trim="searchInput" placeholder="Поиск по 100 000 товаров" />
            <div v-if="searchInput.length !== 0" class="submit-button">
                <CtAButton title="Найти" color="hover" />
            </div>
        </div>
        <div class="other">
            <span>Информация о компании</span>
            <span>Контакты</span>
            <span>Полезные ссылки</span>
        </div>
    </div>
</template>

<style scoped>
.header-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 0px;
}
.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    height: 48px;
}

.logo>*:not(:last-child) {
    margin-right: 10px;
}

.logo>span {
    color:#333333;
}

.catalog {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 24px;
    height: 48px;
    border: 1px solid #7397F5;
    border-radius: 8px;
    margin-left: 10px;
    margin-right: 24px;
}

.catalog>span {
    color:#333333;
    font-weight: 600;
}

.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    border: 1px solid #AAAAAA;
    border-radius: 10px;
    height:48px;
    width: 100%;
    /* max-width: 820px; */
    min-width: 480px;
}

.search:hover {
    border: 1px solid #7397F5;
}

.search>*:not(:last-child) {
    margin-right: 10px;
}

.other {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    min-width: 440px;
    height:48px;
    margin: 0px auto;
}

.other>span {
    color:#393939;
}

.other>*:not(:last-child) {
    margin-right: 20px;
}
    
</style>