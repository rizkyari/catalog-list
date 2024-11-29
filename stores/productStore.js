import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        productDetail: null,
        isFetchingProduct: false,
        isFetchingDetailProduct: false,
    }),
    actions: {
        async fetchProducts() {
            this.isFetchingProduct = true
            try {
                const { data } = await useNuxtApp().$axios.get('/products')
                this.products = data
            } catch (error) {
                console.error(error)
            } finally {
                this.isFetchingProduct = false
            }
        },
        async fetchProductDetail(id) {
            this.isFetchingDetailProduct = true
            try {
                const { data } = await useNuxtApp().$axios.get(`/productDetails`)
                this.productDetail = data[id]
            } catch (error) {
                console.error(error)
            } finally {
                this.isFetchingDetailProduct = false
            }
        },
    },
})
