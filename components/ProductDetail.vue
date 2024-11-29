<template>
    <div class="product-detail">
        <div class="product-images">
            <img :src="images.length > 0 ? images[activeImage] : '/images/ramen.png'" alt="Product Image" class="main-image" />
            <div class="image-thumbnails">
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                alt="Thumbnail"
                :class="{ active: index === activeImage }"
                @click="activeImage = index"
            />
            </div>
        </div>
        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p class="price">Rp {{ product.price }}</p>
            <p class="description">{{ product.description }}</p>
            <p class="stock">Stock: {{ product.stock }}</p>
            <div class="variants">
                <h3>Variants:</h3>
                <button v-for="(variant, index) in product.variants" :key="index">
                    {{ variant }}
                </button>
            </div>
        </div>
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
    data() {
        return {
            activeImage: 0,
        }
    },
    computed: {
        images() {
            return this.product.images || []
        },
    },
  }
</script>
  
<style scoped lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.product-detail {
    display: flex;
    gap: $padding-base;
    flex-wrap: wrap;

.product-images {
    flex: 1;
    
    .main-image {
        max-width: $image-max-width;
        border-radius: 8px;
    }

    .image-thumbnails {
        display: flex;
        gap: 8px;
        margin-top: 8px;

        img {
            width: $thumbnail-size;
            height: $thumbnail-size;
            object-fit: cover;
            cursor: pointer;
            border: 1px solid $border-color;
            border-radius: 4px;

            &.active {
                border-color: $primary-color;
            }
        }
    }
}

.product-info {
    flex: 2;
    @include responsive-padding;

    h1 {
        font-size: 2rem;
        color: $primary-color;
        margin-bottom: $padding-base;
    }

    .price {
        color: $primary-color;
        font-weight: bold;
        margin: $padding-base 0;
    }

    .description {
        color: $secondary-color;
        margin-bottom: $padding-base;
    }

    .stock {
        color: $secondary-color;
        font-size: 0.9rem;
        margin-bottom: $padding-base;
    }

    .variants {
        h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        button {
            margin-right: 8px;
            padding: 8px 12px;
            border: 1px solid $border-color;
            border-radius: 4px;
            cursor: pointer;
            background-color: $pure-white;

            &:hover {
                background-color: $primary-color;
            color: $pure-white;
            }
        }
    }
  }
}

// Mobile responsiveness
@media (max-width: $small-breakpoint) {
    .product-detail {
        flex-direction: column;
        align-items: center;
    }

    .product-info {
        flex: none;
        width: 100%;
        text-align: center;
    }

    .product-images {
        flex: none;
        width: 100%;
        margin-bottom: 16px;
    }

    .image-thumbnails {
        justify-content: center;
    }

    .image-thumbnails img {
        width: 40px;
        height: 40px;
    }
}
</style>