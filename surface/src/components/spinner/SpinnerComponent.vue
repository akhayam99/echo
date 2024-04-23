<template>
  <div class="spinner">
    <div class="spinner-inner"></div>
  </div>
</template>

<style>
.spinner {
  width: 32px;
  height: 32px;
  position: relative;
  margin: 0 auto;
}

.spinner-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid var(--primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>