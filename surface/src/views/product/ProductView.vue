<script lang="ts">
import {loadProducts} from '@/service/products.service'
import type {Product} from '@/types/Products'
import ProductList from '@/views/product/list/ProductList.vue'
import SpinnerComponent from "@/components/spinner/SpinnerComponent.vue";

export default {
  components: {SpinnerComponent, ProductList},
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
    },
    uniqueCustomers(products: Product[]) {
      return products.reduce((prev, curr) => {
        if (prev.includes(curr.customer_id)) {
          return prev;
        }
        return [...prev, curr.customer_id];
      }, [] as string[]).length;
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
      <h1> Prodotti </h1>
      <div class="info">
        <div class="title"> Totale prodotti</div>
        <div class="value">
          <span v-if="products.length"> {{ products.length }} </span>
          <span v-else> --- </span>
        </div>
      </div>
      <div class="info">
        <div class="title"> Clienti unici</div>
        <div class="value">
          <span v-if="products.length"> {{ uniqueCustomers(products) }} </span>
          <span v-else> --- </span>
        </div>
      </div>
    </div>
    <SpinnerComponent v-if="loading"/>
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
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--border--base);
  display: flex;
  flex-direction: row;
  padding: 32px;
  gap: 40px;
  justify-content: space-around;

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .title {
      font-size: 16px;
      color: var(--text--secondary);
    }

    .value {
      font-size: 24px;
      color: var(--text-primary);
    }
  }
}
</style>