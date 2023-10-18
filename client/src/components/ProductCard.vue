<script>
    import { mapActions } from 'pinia';
    import { useRestaurantStore } from '../stores/restaurant';
    
    export default {
        props: ['product'],
        methods: {
            ...mapActions(useRestaurantStore, ['addCart'])
        }
    }
</script>

<template>
    <div class="col-12 col-lg-3">
        <div class="card shadow-sm border-0 rounded">
            <img :src="product.imageUrl" class="card-img-top" :alt="product.name" style="max-height: 167px;"/>
            <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-text">{{ product.description }}</p>
                <p>Rp. {{ product.price }}</p>
                <button class="btn btn-card" @click="addCart(product.id)">Add to Cart</button>
            </div>
        </div>
    </div>
</template>