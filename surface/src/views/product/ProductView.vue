<script lang="ts">
import LoaderComponent from '@/components/loader/LoaderComponent.vue'
import {loadProducts} from '@/service/products.service'
import type {Product} from '@/types/Products'
import ProductList from '@/views/product/list/ProductList.vue'

export default {
  components: {ProductList, LoaderComponent},
  data() {
    return {
      loading: false,
      products: [] as Product[],
    }
  },
  methods: {
    async getProducts() {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 200)); // Extend the loading time to see the loader
      try {
        this.products = await loadProducts()
      } finally {
        this.loading = false;
      }
    }
  },
  beforeMount() {
    this.getProducts()
  }
}
</script>

<template>
  <main>
    <div class="card">
      <h1>Prodotti</h1>
    </div>
    <LoaderComponent v-if="loading"/>
    <ProductList :list="products" v-else/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
}

.card {
  border: 1px solid var(--border--base);
  border-radius: 4px;
  padding: 32px;
}
</style>