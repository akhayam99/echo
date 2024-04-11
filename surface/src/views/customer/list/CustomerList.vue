<script setup lang="ts">
import type {Customer} from '@/types/Customer'

const props = defineProps<{
  list: Customer[] | null
}>()
</script>

<template>
  <div class="grid">
    <div class="item" v-for="item in props?.list" :key="item.id" data-test="customers">
      {{ item.name }}
      <div class="id">
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}

.item {
  padding: 8px;
  border: 1px solid var(--border--base);
  border-radius: 4px;
  position: relative;
  height: 32px;

  &:hover {
    background-color: var(--fill--dark);
    cursor: pointer;
  }

  &:active {
    background-color: var(--green--color-green-light-8);
  }

  .id {
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: var(--green--color-green-light-8);
    padding: 4px;
    border-radius: 50%;
    color: var(--primary);
    font-size: 10px;
    font-weight: 700;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>