<template>
  <article>
    <slot/>
  </article>
</template>

<style scoped>
article {
  width: calc(100% - 220px);
  padding: 32px;
  max-width: 1200px;
  overflow: auto;
  margin: 0 auto;
}
</style>
