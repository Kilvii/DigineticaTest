<script setup>
import { ref, reactive } from 'vue';
import CtAButton from './CtAButton.vue';
import SpecialInfoShiledComponent from '@/components/SpecialInfoShiledComponent.vue';
import SaleShieldComponent from '@/components/SaleShieldComponent.vue';

</script>

<template>
    <div class="vertical-card">
        <div class="imagery">
            <div class="info">
                <SpecialInfoShiledComponent />
            </div>
            <div class="icon">
                <img src="@/icons/Desktop/Cube.svg" alt="Cube icon">
            </div>
            <div class="info">
                <SaleShieldComponent />
            </div>
        </div>
        <div class="labels">
            <span>Бренд</span>
            <div class="product-name">
                Полное название товара в несколько строк для вида с обрывом в конце...
            </div>
        </div>
        <div class="prices">
            <span class="sale-price">5 999 ₽</span>
            <span class="main-price">5 999 ₽</span>
        </div>
        <div class="buy-button">
            <CtAButton title="Купить" color="default"/>
        </div>
    </div>
</template>

<style scoped>
.vertical-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 10px;
}

.vertical-card>*:not(:last-child) {
    margin-bottom: 10px;
}

.imagery {
    display: flex;
    flex-direction: column;
    background-color: #F8F8FA;
}

.imagery>*:not(:last-child) {
    margin-bottom: 10px;
}

.labels {
    display: flex;
    flex-direction: column;
}

.labels>span {
    color: #AAAAAA
}

.prices{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.prices>*:not(:last-child) {
    margin-right: 6px;
}

.main-price {
    font-size:12px;
    color:#AAAAAA;
    text-decoration: line-through;
}

.sale-price {
    color:#333333;
    font-weight: 600;
}

.buy-button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.product-name {
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.labels>*:not(:last-child) {
    margin-bottom: 10px;
}


.info {
    display: flex;
    flex-direction: row;
    padding: 10px;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
