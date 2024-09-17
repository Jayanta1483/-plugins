<template>
<span :data-index="props.index" :class="{active : props.isActive}" @click="emit('indicator', index)"></span>
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
 span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border-radius: 50%;
  border: none;
  background-color: white;
  opacity: 0.6;
  cursor: pointer;
}

</style>
