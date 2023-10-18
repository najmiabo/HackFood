<script>
    import ProductCard from '../components/ProductCard.vue'
    import ButtonGroup from '../components/ButtonGroup.vue'
    import {
        mapActions,
        mapState
    } from 'pinia';
    import {
        useRestaurantStore
    } from '../stores/restaurant'

    export default {
        components: {
            ProductCard,
            ButtonGroup
        },
        data() {
            return {
                params: {
                    search: ''
                }
            }
        },
        methods: {
            ...mapActions(useRestaurantStore, ['fetchProducts', 'fetchCategories'])
        },
        computed: {
            ...mapState(useRestaurantStore, ['products', 'categories'])
        },
        watch: {
            ['params.search']() {
                this.fetchProducts(this.params)
            }
        },
        created() {
            this.fetchProducts()
            this.fetchCategories()
        }
    }
</script>

<template>
    <div class="container mt-5">
        <h3 class="mb-3"><a href="#!" @click.prevent="this.$router.back" class="text-body"><i
                    class="fas fa-long-arrow-alt-left me-2"></i>Back</a></h3>
        <hr>
        <h1 class="mb-4">Food and Drink lists</h1>
        <div class="input-group rounded mb-4 border">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" v-model="params.search"
                aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div>
        <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="fetchProducts()">All</button>
            <ButtonGroup v-for="category in categories" :key="category.id" :category="category"/>
        </div>
        <div class="row g-5">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>