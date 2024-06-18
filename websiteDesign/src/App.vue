<script setup>
import { ref, reactive } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CategoryFilterComponent from './components/CategoryFilterComponent.vue';
import SliderFilterComponent from './components/SliderFilterComponent.vue';
import CheckboxFilterComponent from './components/CheckboxFilterComponent.vue';
import VerticalCardComponent from './components/VerticalCardComponent.vue';
</script>

<template>
     <header>
          <HeaderComponent />
     </header>
     <main>
          <aside>
               <CategoryFilterComponent />
               <SliderFilterComponent />
               <CheckboxFilterComponent title="Бренд" :btnNeed="true" />
               <CheckboxFilterComponent title="Размер" :btnNeed="false" />
          </aside>
          <div class="cards">
               <div v-for="i in 4" :key="i">
                    <VerticalCardComponent v-for="j in 3" :key="j" />
               </div>
          </div>
     </main>

</template>

<style scoped>
main {
     display: flex;
     flex-direction: row;
}

.cards {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 20px;
}
</style>
