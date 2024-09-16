<template>
<button :data-index="props.index" ></button>
</template>
<script setup lang="ts">
type props = {index: number }
const props = defineProps<props>();
</script>
<style scoped>
 button {
  width: .5rem;
  height: .5rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
  cursor: pointer;
}

</style>
