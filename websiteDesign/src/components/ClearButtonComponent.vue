<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Очистить",
    },
    color: {
        type: String,
        default: "default",
    },
})
</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :class="[`btn_${color}`]" >
            {{ title }}
        </button>
    </div>
</template>

<style scoped>
.btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 48px;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    height: inherit;
    width: inherit;
    text-decoration: underline;
}

.btn_default {
    background-color: #FFFFFF;
    color:#AAAAAA;
}

.btn_active {
    background-color: #FFFFFF;
    color: #333333;
}
</style>