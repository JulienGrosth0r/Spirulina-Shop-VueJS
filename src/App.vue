<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const onSuppliersListClick = () => {
  alert('ALAAAAAAAAAARM')
};
const onMapClick = () => {
  alert('ALAAAAAAAAAARM')
};


</script>

<template>

  <Header/>

  <RouterView/>

  <Footer/>

</template>

<style scoped>

</style>
