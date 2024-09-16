<script setup lang="ts">
import Slide from './Slide.vue';
import Indicator from './Indicator.vue';
import summer from "../assets/images/summer.jpg";
import rain from "../assets/images/rain.jpg"
import jungle from "../assets/images/jungle.jpg"
import { computed, ref, watch } from 'vue';


const slides = [
  { url: summer, text: 'First Screen' },
  { url: rain, text: 'Second Screen' },
  { url: jungle, text: 'Third Screen' },
];

const displayIndex = ref<number>(0);
const animationType = ref<string>();



function slideNext(): void {
  if ((slides.length - 1) >= displayIndex.value) {
    animationType.value = "leftSlide";
    if (displayIndex.value === (slides.length - 1)) {
      displayIndex.value = 0;
      return;
    }
    displayIndex.value++;
  }
}

function slidePrevious(): void {
  if (0 <= displayIndex.value) {
    animationType.value = "rightSlide";
    if (displayIndex.value === 0) {
      displayIndex.value = (slides.length - 1);
      return;
    }
    displayIndex.value--;
  }
}

function slideChange(e: number): void{
 animationType.value = (e > displayIndex.value) ? "leftSlide" : "rightSlide";
 displayIndex.value = e;
}
const numberOfSlides = computed((): number[] => {
  return slides.map((item, index) => index)
})
</script>

<template>
  <div class="carousel" id="carousel-wrapper">
    <span class="arrow arrow--left" id="prev" @click="slidePrevious"></span>
    <span class="arrow arrow--right" id="next" @click="slideNext"></span>
    <div class="carousel__inner">
      <TransitionGroup :name="animationType">
        <Slide v-for="(slide, index) in slides" :key="index" :url="slide.url" :description="slide.text"
          :isDisplay="index === displayIndex" />
      </TransitionGroup>
    </div>
    <div class="carousel__indicators">
      <Indicator v-for="index in numberOfSlides" :isActive="index === displayIndex" :key="index" :index="index"
        @indicator="slideChange" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  margin: 2rem auto;
  width: 70vw;
  height: 50vh;
  overflow: hidden;
}

.arrow {
  position: absolute;
  top: 43%;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-top: 0.5rem solid #fff;
  border-right: 0.5rem solid #fff;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
}

.arrow--left {
  margin-left: 3rem;
  left: 0;
  transform: rotate(-135deg);
}

.arrow--right {
  margin-right: 3rem;
  right: 0;
  transform: rotate(45deg);
}

.arrow:hover {
  opacity: 1;
}

.carousel__inner {
  width: 100%;
  height: 100%;
  padding-top: 58.1632653061%;
}

.carousel__indicators {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
}

.carousel__indicators button.active {
  opacity: 1;
}

.leftSlide-enter-active {
  animation: slide-in-left 0.9s;
}

.leftSlide-leave-active {
  animation: slide-out-left 0.9s;
}

.rightSlide-enter-active {
  animation: slide-in-right 0.9s;
}

.rightSlide-leave-active {
  animation: slide-out-right 0.9s;
}

/* @keyframes slide-out-left {
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
}
@keyframes slide-in-left {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
@keyframes slide-out-right {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}
@keyframes slide-in-right {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
} */
</style>
