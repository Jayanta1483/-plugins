##### Installation

```powershell
npm i vue-carousel-24
```



1. In the component first import the Carousel component and style.css.
2. In the template place Carousel component.
3. Pass options as props. Text property is optional.
4. By default auto slide property is false. To activate it need to pass as true. 
5. Maximum number of slide option supported is five.

Example:

```vue
<script setup>
import { Carousel } from "vue-carousel-24";
import "vue-carousel-24/style.css"


const slides = [
  { url: '../imageFile', text: 'description text....' },
  { url: '../imageFile', text: 'description text.... },
  { url: '../imageFile', text: 'description text....' }
];

</script>

<template>
   <Carousel 
    :slides="slides" 
    :autoSlide="true"
    />
</template>
```

