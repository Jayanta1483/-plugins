<script setup lang="ts">
import Slide from './Slide.vue';
import Indicator from './Indicator.vue';
import summer from "../assets/images/summer.jpg";
import rain from "../assets/images/rain.jpg"
import jungle from "../assets/images/jungle.jpg"
import { computed } from 'vue';



  const slides = [
    {url: summer, text: 'First Screen'},
    {url: rain, text: 'Second Screen'},
    {url: jungle, text: 'Third Screen'},
  ];

  const numberOfSlides = computed(() => {
    return slides.map((item, index) => index)
  })
</script>

<template>
   <div class="carousel" id="carousel-wrapper">
            <span class="arrow arrow--left" id="prev"></span>
            <span class="arrow arrow--right" id="next"></span>
            <div class="carousel__inner">
               <Slide v-for="(slide, index) in slides" :key="index" :url="slide.url" :description="slide.text"/>
            </div>
            <div class="carousel__indicators">
              <Indicator v-for="index in numberOfSlides" :key="index" :index="index"/>
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
