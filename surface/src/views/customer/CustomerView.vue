<script lang="ts">
import LoaderComponent from '@/components/loader/LoaderComponent.vue'
import {loadCustomers} from '@/service/customers.service'
import type {Customer} from '@/types/Customer'
import CustomerList from '@/views/customer/list/CustomerList.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon, LoaderComponent, CustomerList},
  data() {
    return {
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
  <main>
    <div class="card">
      <div class="content">
        <h1> Clienti </h1>
        <div class="info">
          <div class="title"> Totale clienti</div>
          <div class="value">
            <span v-if="customers.length"> {{ customers.length }} </span>
            <span v-else> --- </span>
          </div>
        </div>
      </div>
      <div class="actions">
        <FontAwesomeIcon @click="getCustomers()" icon="arrows-rotate" class="action"/>
      </div>
    </div>
    <LoaderComponent v-if="loading"/>
    <CustomerList :list="customers" v-else/>
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
  display: flex;
  border: 1px solid var(--border--base);
  border-radius: 4px;

  .content {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 32px;

    gap: 40px;
    justify-content: space-around;
    flex: 1;

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

  .actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    width: 40px;
    background-color: var(--green--color-green-light-9);

    .action {
      cursor: pointer;

      &:hover {
        scale: 1.1;
      }
    }
  }
}
</style>