<template>
    <div class="product-card" @click="goToDetail">
        <img :src="product.thumbnail" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">Rp {{ product.price.toLocaleString() }}</p>
        <p class="product-stock">Stock: {{ product.stock }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goToDetail() {
            this.$router.push(`/product/${this.product.id}`)
        },
    },
}
</script>
  
<style scoped>
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-image {
    height: 11em;
    border-radius: 4px;
}

.product-name {
    font-size: 1.2rem;
    margin: 8px 0;
}

.product-price {
    color: #f56b00;
    font-weight: bold;
}

.product-stock {
    color: #555;
}
</style>
  