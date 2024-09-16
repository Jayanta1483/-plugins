<template>
<button :data-index="props.index" :class="{active : props.isActive}" @click="emit('indicator', index)"></button>
</template>
<script setup lang="ts">
type props = {index: number, isActive: boolean }
const props = defineProps<props>();
const { index } = props;
const emit = defineEmits<{
    indicator: [index: number]
}>();
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
