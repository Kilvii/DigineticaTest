<script setup>
</script>

<template>
    <div class="info-wrap">
        <span>Хит продаж</span>
        <img class="icon" src="@/icons/Desktop/Fire.svg" alt="Fire icon">
    </div>
</template>

<style scoped>
.info-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background-color: #FFFFFF;
    border: 1px solid #F2F2F2;
    border-radius: 4px;
    padding: 0px 10px
}

.info-wrap>*:not(:last-child) {
    margin-right: 10px;
}

span {
    color: #333333;
}
</style>