<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: "от",
    },
    placeholder: {
        type: String,
        default: "Ввод",
    },
    maxLenght: {
        type: Number,
        default: 6
    }
})

const inputValue = ref('');

const formattedInputValue = computed(() => {
    return inputValue.value.replace(/[^0-9]/g, '') + '₽';
});

const handleInput = (event) => {
    inputValue.value = event.target.value;
};
</script>

<template>
    <div class="input-wrap">
        <span class="input-from">{{ prefix }}</span>
        <input class="input-field" :placeholder="placeholder" :maxlength="maxLenght" v-model="formattedInputValue"
            @input="handleInput" />
    </div>
</template>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 119px;
    height: 36px;
    border: 1px solid #AAAAAA;
    border-radius: 4px;
    padding: 10px 8px;
}

.input-wrap>*:not(:last-child) {
    margin-right: 10px;
}

.input-field {
    height: 24px;
    border: none;
    text-align: left;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
}

.input-from {
    color: #AAAAAA;
}
</style>
