<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "default",
    },
    icon: {
        type: String,
        default: "",
    },
})
</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :class="[`btn_${color}`]" >
            <img v-if="icon" :src="icon" alt="btn-icon" />
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
    width: inherit;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    height: inherit;
    width: inherit;
    padding: 12px 16px;
}

.btn_default {
    background-color: #FFFFFF;
    color:#7397F5;
}

.btn_hover {
    background-color: #7397F5;
    color: #FFFFFF;
}

.btn_img_hover {
    background-color: #E2EFFF;
}

.btn_unavailable {
    background-color: #FFFFFF;
    color:#AAAAAA;
}

.btn:has(img) {
    width: 24px;
    height: 24px;
    border: none;
    padding: 12px 8px;
}

</style>