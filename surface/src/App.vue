<script setup lang="ts">
import { RouterView } from 'vue-router'
import { appRoutesObj } from '@/utils'
import AppSidebar from '@/layout/sidebar/AppSidebar.vue'
import AppContent from '@/layout/content/AppContent.vue'
</script>

<template>
  <main>
    <AppSidebar :routes="appRoutesObj()" />
    <AppContent>
      <RouterView />
    </AppContent>
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
