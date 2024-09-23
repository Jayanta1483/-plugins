##### Installation

```powershell
npm i vue-carousel-24
```



In the component first import the Carousel component and style.css and then in the template place imported Carousel component pass options as props. By default au slide property is false. To activate it need to pass as true. Maximum number of slide option supported is five.

Example:

```vue
<script setup>
import { Carousel } from "vue-carousel-24";
import "vue-carousel-24/style.css"
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";


const slides = [
  { url: summer, text: 'description text....' },
  { url: rain, text: 'description text.... },
  { url: jungle, text: 'description text....' }
];

</script>

<template>
   <Carousel 
    :slides="slides" 
    :autoSlide="true"
    />
</template>
```

