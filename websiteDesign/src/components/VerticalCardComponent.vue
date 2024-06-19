<script setup>
import CtAButton from './CtAButton.vue';
import SpecialInfoShiledComponent from '@/components/CardItems/SpecialInfoShiledComponent.vue';
import SaleShieldComponent from '@/components/CardItems/SaleShieldComponent.vue';

const props = defineProps({
    isAvailable: {
        type: Boolean,
        default: true,
    },
})

</script>

<template>
    <div class="vertical-card-avail" v-if="isAvailable">
        <div class="imagery">
            <div class="info">
                <SpecialInfoShiledComponent />
            </div>
            <div class="icon">
                <img src="@/icons/Cube.svg" alt="Cube icon">
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
            <CtAButton title="Купить" color="default" />
        </div>
    </div>
    <div class="vertical-card-unavail" v-else>
        <div class="imagery">
            <div class="info">
                <SpecialInfoShiledComponent />
            </div>
            <div class="icon">
                <img src="@/icons/Cube.svg" alt="Cube icon" >
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
        <div class="alert-button">
            <CtAButton title="Сообщить о поступлении" color="unavailable" />
        </div>
    </div>
</template>

<style scoped>
.vertical-card-avail, .vertical-card-unavail {
    display: flex;
    flex-direction: column;
    width: 335px;
    padding: 10px;
}

.vertical-card-avail>*:not(:last-child) {
    margin-bottom: 10px;
}

.vertical-card-unavail>*:not(:last-child) {
    margin-bottom: 10px;
}

.vertical-card-avail:hover .product-name {
    color: #125BAE;
    cursor: pointer;
}

.vertical-card-avail:hover .icon img {
    width: 82px;
    height: 82px;
}

.vertical-card-unavail:hover .product-name {
    color: #125BAE;
    cursor: pointer;
}

.vertical-card-unavail:hover .icon img {
    width: 82px;
    height: 82px;
}

.imagery {
    display: flex;
    flex-direction: column;
    background-color: #F8F8FA;
    height:200px;
}

.imagery>*:not(:last-child) {
    margin-bottom: auto;
}

.labels {
    display: flex;
    flex-direction: column;
}

.labels>span {
    color: #AAAAAA
}

.prices {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.prices>*:not(:last-child) {
    margin-right: 6px;
}

.main-price {
    font-size: 12px;
    color: #AAAAAA;
    text-decoration: line-through;
}

.sale-price {
    color: #333333;
    font-weight: 600;
}

.alert-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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

.card-footer>*:not(:last-child) {
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

.vertical-card-unavail .icon img {
    opacity: 50%;
}

@media (max-width: 1440px) {
    .vertical-card-avail, .vertical-card-unavail {
        display: flex;
        flex-direction: column;
        width: 215px;
        padding: 10px;
    }
}

@media (max-width: 376px) {
    .vertical-card-avail, .vertical-card-unavail {
        display: flex;
        flex-direction: column;
        width: 165px;
        padding: 4px;
    }
}
</style>
