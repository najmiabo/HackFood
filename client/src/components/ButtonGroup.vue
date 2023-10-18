<script>
    import { mapActions } from 'pinia';
    import { useRestaurantStore } from '../stores/restaurant';
    export default {
        props: ['category'],
        methods: {
            ...mapActions(useRestaurantStore, ['fetchProducts']),
            filteringProducts(id) {
                const params = {
                    filterCategory: id
                }
                this.fetchProducts(params)
            }
        }
    }
</script>

<template>
    <button type="button" class="btn btn-outline-secondary btn-sm" @click="filteringProducts(category.id)">{{ category.name }}</button>
</template>