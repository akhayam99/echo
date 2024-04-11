<script  lang="ts">
import LoaderComponent from '@/components/loader/LoaderComponent.vue'
import { loadProducts } from '@/service/product.service'
import type { Product } from '@/types/Products'
import ProductList from '@/views/product/list/ProductList.vue'

export default {
  components: { ProductList, LoaderComponent },
  data() {
    return {
      title: 'Products',
      loading: false,
      products: [] as Product[],
    }
  },
  methods: {
    async getProducts() {
      this.loading = true
      await new Promise(resolve => setTimeout(resolve, 500))
      this.products = await loadProducts().finally(() => this.loading = false)
    }
  },
  beforeMount() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="about">
    <h1> {{ title }} </h1>
  </div>
  <LoaderComponent v-if="loading" />
  <ProductList :list="products" v-else />
</template>
