<script>
export default {
  name: "Header",
  data() {
    return {}
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bgNavBar py-4">
      <div class="container-fluid">
        <router-link class="navbar-brand fw-bold" to="/">
          THE MAGNIFICENT, THE GRANDIOSE, THE AMAZING SPIRULINE SHOP !
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/suppliers">SUPPLIERS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/map">MAP</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

.bgNavBar {
  background-color: #d1e7dd;
}

</style>