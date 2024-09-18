<script setup lang="ts">
import Slide from './Slide.vue';
import Indicator from './Indicator.vue';
import { computed,  onMounted,  ref, watch } from 'vue';
import { startTimer, stopTimer} from "../utils/timer";
import { LEFT_SLIDE, OPTION_EXCEED, RIGHT_SLIDE } from '../utils/enums';



type propType = {
  slides:  {url: string, text?: string}[],
  autoSlide?: boolean
}
const props = withDefaults(defineProps<propType>(), {
  autoSlide: false
});




onMounted(() => {
  if(props.autoSlide){
    startTimer(slideNext)
  }
  const carouselWrapperEle: (null | HTMLElement) = document.querySelector("#carousel-wrapper");

  carouselWrapperEle?.addEventListener('mouseover', stopTimer);

  carouselWrapperEle?.addEventListener('mouseleave', function(){
    startTimer(slideNext)
  })
})


const slides = computed(() => {
  if(props.slides.length > 5){
    console.warn(OPTION_EXCEED);
    return props.slides.slice(0, 5)
  }
  else{
    return props.slides;
  }
})

const displayIndex = ref<number>(0);
const animationType = ref<string>();

watch(displayIndex, (nw, ol) => {
  if(nw > ol){
    animationType.value = (nw == (slides.value.length - 1) && ol == 0) ? RIGHT_SLIDE : LEFT_SLIDE;
  }
  else{
    animationType.value = (nw == 0 && ol == (slides.value.length - 1)) ? LEFT_SLIDE : RIGHT_SLIDE;
  }
});



function slideNext(): void {
  if ((slides.value.length - 1) >= displayIndex.value) {
    if (displayIndex.value === (slides.value.length - 1)) {
      displayIndex.value = 0;
      return;
    }
    displayIndex.value++;
  }
}

function slidePrevious(): void {
  if (0 <= displayIndex.value) {
    if (displayIndex.value === 0) {
      displayIndex.value = (slides.value.length - 1);
      return;
    }
    displayIndex.value--;
  }
}

const numberOfSlides = computed((): number[] => {
  return slides.value.map(item => slides.value.indexOf(item))
})
</script>

<template>
  <div class="carousel" id="carousel-wrapper">
    <span class="arrow arrow--left" id="prev" @click="slidePrevious"></span>
    <span class="arrow arrow--right" id="next" @click="slideNext"></span>
    <div class="carousel__inner" id="carouselInner" >
      <TransitionGroup :name="animationType">
        <Slide v-for="(slide, index) in slides" :key="index" :url="slide.url" :description="slide.text"
          :isDisplay="index === displayIndex" />
      </TransitionGroup>
    </div>
    <div class="carousel__indicators">
      <Indicator v-for="index in numberOfSlides" :isActive="index === displayIndex" :key="index" :index="index"
        @indicator="(e) => displayIndex = e" />
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

.carousel__indicators span.active {
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

@keyframes slide-out-left {
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
}
</style>
