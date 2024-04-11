<script setup lang="ts">
import {RouterLink} from 'vue-router'
import type {AppRoute} from '@/types/AppRouter'

const props = defineProps<{ routes: AppRoute[] }>()
</script>

<template>
  <div class="host">
    <header>
      <img src="../../assets/logo.svg" alt="logo" width="32"/> <span> Echo </span>
    </header>
    <aside>
      <RouterLink v-for="link in props.routes" :to="link.path" :key="link.id" class="voice"
                  :class="{active: $route.path === link.path }"> {{ link.name }}
      </RouterLink>
    </aside>
  </div>
</template>

<style scoped>

.host {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border--base);
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.1); /* Subtle shadow on the right side */

}

header {
  display: flex;
  justify-content: center;
  padding: 32px;
  gap: 8px;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 600;
    color: var(--text--secondary);
  }
}

aside {
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 16px;
  justify-content: center;
}

.voice {
  align-items: center;
  color: var(--text--secondary);
  display: flex;
  padding: 8px 16px;
  text-decoration: none;
  border-bottom-left-radius: 32px;
  border-top-left-radius: 32px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: var(--fill--lighter);
  }

  &.active {
    background-color: var(--green--color-green-light-8);
    color: var(--text-primary);
  }

  &:active {
    background-color: var(--fill--dark);
    color: var(--text-primary);
  }
}
</style>
