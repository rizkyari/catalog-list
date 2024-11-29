<template>
    <div>
        <h1>Product Catalog</h1>
        <div v-if="isFetchingProducts" class="loader-container">
            <Loader />
        </div>
        <div v-else class="catalog">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>
  
<script>
import { useProductStore } from '@/stores/productStore'
import ProductCard from '@/components/ProductCard.vue'
import Loader from '@/components/Loader.vue'

export default {
    components: {
        ProductCard,
        Loader,
    },
    data() {
        return {
            products: [],
        }
    },
    async mounted() {
        const productStore = useProductStore()
        await productStore.fetchProducts()
        this.products = productStore.products
    },
    computed: {
        isFetchingProducts() {
        const productStore = useProductStore()
        return productStore.isFetchingProduct
        },
    },
}
</script>
  
<style scoped lang="scss">
$loader-height: 30vh;
$gap: 16px;
$breakpoint-mobile: 600px;

.catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $gap;
    padding: 16px;
}

.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $loader-height;

    @media (max-width: $breakpoint-mobile) {
        height: 20vh;
        padding: 20px;
    }
}

@media (max-width: $breakpoint-mobile) {
    .catalog {
        gap: 12px;
    }
}
</style>
  