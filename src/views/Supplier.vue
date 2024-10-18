<script>
export default {
  name: "Supplier",
  props: {
    key: Number,
    name: String,
    status: Boolean,
    checkedAt: String,
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="card mb-3 mt-5" style="width: 30rem;">
      <img src="https://spiruline-akalfood.com/wp-content/uploads/2020/10/plantation-arbres-Laurent-1.jpg"
           class="card-img-top" alt="spiruline farmer" style="width: 100%; height: auto; max-height: 300px;">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text text-success" v-if="status">A du stock ? OK</p>
        <p class="card-text text-danger" v-else>A du stock? KO</p>
        <p class="card-text">
          <small class="text-body-secondary">Dernière mise à jour : {{ new Date(checkedAt).toLocaleString() }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
