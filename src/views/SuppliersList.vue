<script>
import Supplier from "@/views/Supplier.vue";
import axios from "axios";

export default {
  name: "SuppliersList",
  components: {Supplier},
  data() {
    return {
      suppliers: [], // au débutla liste des fournisseurs est vide
      loading: false,
      error: null,
    }
  },
  created() {
    this.loading = true;
    axios.get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({ //avec .map on vient chercher uniquement ce qui nous intéresse
            id: supplier.id,
            name: supplier.name,
            status: supplier.status,
            checkedAt: supplier.checkedAt,
          }))
        })
        .catch(error => {
          this.error = error;
          console.log(error)
        })
        .finally(() => this.loading = false)
  }
}
</script>

<template>
  <h1 class="text-center mt-5">Liste des fournisseurs</h1>
  <Supplier v-for="supplier in suppliers"
            :key="supplier.id"
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"/>
</template>

<style scoped></style>
