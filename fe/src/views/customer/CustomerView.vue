<script lang="ts">
import LoaderComponent from '@/components/loader/LoaderComponent.vue'
import { loadCustomers } from '@/service/customer.service'
import type { Customer } from '@/types/Customer'
import CustomerList from '@/views/customer/list/CustomerList.vue'

export default {
  components: { LoaderComponent, CustomerList },
  data() {
    return {
      title: 'Customers',
      loading: false,
      customers: [] as Customer[]
    }
  },
  methods: {
    async getCustomers() {
      this.loading = true
      await new Promise(resolve => setTimeout(resolve, 500))
      this.customers = await loadCustomers().finally(() => this.loading = false)
    }
  },
  beforeMount() {
    this.getCustomers()
  }
}
</script>

<template>
  <div class="about">
    <h1> {{ title }} </h1>
  </div>
  <LoaderComponent v-if="loading" />
  <CustomerList :list="customers" v-else />
</template>
