<script>
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css"; // Importation de la feuille de style Leaflet
import axios from "axios";

export default {
  name: "SuppliersMap",
  components: {
    LPopup,
    LMarker,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 8,
      center: [], // Coordonnées de la géolocalisation
      suppliers: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null,
    }
  },
  created() {
    this.loading = true;
    axios
        .get("https://suppliers.depembroke.fr/api/suppliers")
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({
            latitude: supplier.latitude,
            longitude: supplier.longitude,
          }))
        })
        .catch(error => {
          this.error = error;
          console.log(error)
        })
        .finally(() => this.loading = false)

    // Géolocalisation de l'utilisateur
    navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mise à jour du centre de la carte avec la position de l'utilisateur
          this.center = [position.coords.latitude, position.coords.longitude];
        },
        (error) => {
          console.error("Erreur de géolocalisation : ", error);
        }
    );
  }
}

</script>

<template>
  <h1 class="text-center mt-5">Carte des fournisseurs</h1>
  <div class="container">
    <div class="m-auto" style="height:600px; width:1000px">
      <!-- Vérification que le centre est bien défini -->
      <l-map v-if="center.length" ref="map" v-model:zoom="zoom" :center="center">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>

        <!-- Génération des marqueurs pour chaque fournisseur -->
        <l-marker
            v-for="supplier in suppliers"
            :key="supplier.id"
            :lat-lng="[supplier.latitude, supplier.longitude]"
        >
        </l-marker>
      </l-map>
    </div>
  </div>

  <div class="d-flex justify-content-center mt-5">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.1722007145997!2d5.731526567696906!3d45.184975786894185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af50cf63cdb9d%3A0x1d2c2112f085a16a!2sLE%20CAMPUS%20NUMERIQUE%20IN%20THE%20ALPS!5e0!3m2!1sfr!2sfr!4v1727359669341!5m2!1sfr!2sfr"
        width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>
</style>
