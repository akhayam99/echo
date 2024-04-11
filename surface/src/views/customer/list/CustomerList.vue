<script setup lang="ts">
  import type { Customer } from '@/types/Customer'

  const props = defineProps<{
    list: Customer[] | null
  }>()
</script>

<template>
  <ul>
    <li v-for="item in props?.list" :key="item.id" data-test="customers">
      {{ item.id }} - {{ item.name }}
    </li>
  </ul>
</template>