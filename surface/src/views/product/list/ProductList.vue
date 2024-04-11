<script setup lang="ts">
import type {Product} from '@/types/Products';

const props = defineProps<{
  list: Product[] | null
}>()
</script>

<template>
  <main>
    <ul>
      <li v-for="item in props?.list" :key="item.id" data-test="product">
        {{ item.id }} - {{ item.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  overflow: auto;
  height: 100%;
}
</style>