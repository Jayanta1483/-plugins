<template>
    <section class="carousel__item" v-if="isDisplay">
        <img :src="props.url" class="carousel__img"  />
        <h3 v-show="description">{{ description }}</h3>
    </section>
</template>
<script setup lang="ts">
import { computed } from 'vue';


type props = {url: string, description?: string, isDisplay:boolean}
const props = defineProps<props>();

const description = computed((): string | undefined => {
  return (function(str: string | undefined): string | undefined{
    if(!props.description) return;
    const maxLength = 35;
    if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  }
  return str;
  })(props.description)
})

</script>
<style scoped>

.carousel__item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}
h3 {
  color: #faf9f9;
  /* z-index: 100; */
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.carousel__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>