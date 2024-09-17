<script setup lang="ts">
import Carousel from './components/Carousel.vue';
import summer from "../src/assets/images/summer.jpg";
import rain from "../src/assets/images/rain.jpg";
import jungle from "../src/assets/images/jungle.jpg";

const slides = [
  { url: summer, text: 'First Screen' },
  { url: rain, text: 'Second Screen' },
  { url: jungle, text: 'Third Screen' },
];
</script>

<template>
  <section class="container">
    <Carousel :slides="slides" />
  </section>
</template>

<style>
* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

/* :root {
  font-size: 62.5%;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  font-size: 1.6rem;
} */

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

p {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.container {
  padding: 0 1.5rem;
  height: 100vh;
}
</style>
