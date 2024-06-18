<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CategoryFilterComponent from './components/Filters/CategoryFilter/CategoryFilterComponent.vue';
import SliderFilterComponent from './components/Filters/SliderFilter/SliderFilterComponent.vue';
import CheckboxFilterComponent from './components/Filters/CheckboxFilter/CheckboxFilterComponent.vue';
import VerticalCardComponent from './components/VerticalCardComponent.vue';

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
     windowWidth.value = window.innerWidth;
};

onMounted(() => {
     window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
     window.removeEventListener('resize', handleResize);
});

const isMobile = computed(() => {
     return windowWidth.value <= 375;
});

</script>

<template>
     <header>
          <HeaderComponent :isMobile="isMobile ? true : false" />
     </header>
     <main>
          <div class="desktop" v-if="!isMobile">
               <aside>
                    <CategoryFilterComponent />
                    <SliderFilterComponent />
                    <CheckboxFilterComponent title="Бренд" :btnNeed="true" :searchNeed="true" />
                    <CheckboxFilterComponent title="Размер" :btnNeed="false" :searchNeed="false"/>
               </aside>
               <div class="cards">
                    <div v-for="i in 4" :key="i">
                         <VerticalCardComponent />
                         <VerticalCardComponent :isAvailable="false" />
                         <VerticalCardComponent />
                    </div>
               </div>
          </div>
          <div class="mobile" v-else>
               <div class="title">
                    <span>Название категории</span>
               </div>
               <div class="cards">
                    <div v-for="i in 2" :key="i">
                         <VerticalCardComponent />
                         <VerticalCardComponent :isAvailable="false" />
                         <VerticalCardComponent />
                    </div>
               </div>
          </div>
     </main>

</template>

<style scoped>
main {
     display: flex;
     flex-direction: row;
     background-color: white;
     padding: 0px 100px;
     padding-bottom: 10px;
}

aside {
     margin-right: 20px;
}

.title {
     color: #333333;
     font-size: 22px;
     font-weight: 400;
     width: 100%;
}

.cards {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 24px;
}

.desktop{
     display: flex;
     flex-direction:row;
}

.mobile{
     width: 100%;
}

@media (max-width: 1440px) {
     .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
     }
}

@media (max-width: 376px) {
     .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
     }

     main {
          display: flex;
          flex-direction: row;
          background-color: white;
          padding: 0px 20px;
     }
}

</style>
