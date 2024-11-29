<template>
  <nuxt-client-only>
    <div v-if="isFetchingProductDetail" class="loader-container">
      <Loader />
    </div>
    <div v-else-if="product" class="product-detail">
      <ProductDetail :product="product" />
    </div>
    <div v-else class="error-message">
      <p>Sorry, we couldn't find the product.</p>
    </div>
    <!-- <ProductDetail v-if="product" :product="product" /> -->
  </nuxt-client-only>
  
</template>
  
<script>
import { useProductStore } from '@/stores/productStore'
import ProductDetail from '@/components/ProductDetail.vue'
import { useRoute } from 'vue-router'
import Loader from '@/components/Loader.vue';
  
export default {
  components: {
    ProductDetail,
    Loader,
  },
  data() {
    return {
      product: [],
      error: false,
    }
  },
  computed: {
    isFetchingProductDetail() {
      const productStore = useProductStore()
      return productStore.isFetchingDetailProduct
    }
  },
  async mounted() {
    const route = useRoute() 
    const id = route.params.id
    const productStore = useProductStore()

    try {
      await productStore.fetchProductDetail(id)
      this.product = productStore.productDetail

      if (!this.product) {
        this.error = true
      }
    } catch(error) {
      console.error('Failed to fetch product:', error)
      this.error = true
    }
  }
};
</script>
  
<style scoped>
.product-detail {
  padding: 20px;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.error-message {
  text-align: center;
  padding: 20px;
  color: red;
}

@media (max-width: 600px) {
  .product-detail {
    padding: 10px;
  }
}
</style>
  