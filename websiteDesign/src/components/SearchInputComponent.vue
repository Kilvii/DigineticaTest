<script setup>
import { ref } from 'vue';
import CtAButton from './CtAButton.vue';

const isHovered = ref(false)
function onMouseOver() {
    isHovered.value = true;
}

function onMouseLeave() {
    isHovered.value = false;
}

function clearInput() {
    model.value = '';
    isHovered.value = false;
}

const props = defineProps({
    placeholder: {
        type: String,
        default: "Ввод",
    },
    maxLenght: {
        type: Number,
        default: 20
    }
})

const model = defineModel()

</script>

<template>
    <div class="input-wrap">
        <input class="input-field" v-model="model" :placeholder="placeholder" :maxlength="maxLenght" />
        <div v-if="model" class="input-buttons">
            <div class="clear-button" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
                <CtAButton :icon="isHovered? '../src/icons/ClearHover.svg' : '../src/icons/ClearDefault.svg'" @click="clearInput" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: inherit;
}

.input-field {
    height: inherit;
    border: none;
    text-align: left;
    font-size: 14px;
    width: inherit;
    outline: none;
}

.input-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.input-buttons>*:not(:last-child) {
    margin-right: 10px;
}

.clear-button {
    display: flex;
    justify-content: center;
    border: none;
}
</style>