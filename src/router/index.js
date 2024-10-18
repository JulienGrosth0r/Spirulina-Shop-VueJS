import {createRouter, createWebHistory} from 'vue-router'
import SuppliersList from "@/views/SuppliersList.vue";
import SuppliersMap from "@/views/SuppliersMap.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/map',
            name: 'map',
            component: SuppliersMap
        },
        {
            path: '/suppliers',
            name: 'suppliers',
            component: SuppliersList
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

export default router
