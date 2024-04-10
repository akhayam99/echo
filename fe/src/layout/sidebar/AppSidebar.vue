<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { AppRoute } from '@/types/AppRouter'

const props = defineProps<{ routes: AppRoute[] }>()
</script>

<template>
  <aside>
    <RouterLink v-for="link in props.routes" :to="link.path" :key="link.id"> {{ link.name }} </RouterLink>
  </aside>
</template>

<style scoped>
aside {
  width: 220px;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
