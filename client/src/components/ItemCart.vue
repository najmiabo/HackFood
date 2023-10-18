<script>
import { mapActions } from 'pinia';
import { useRestaurantStore } from '../stores/restaurant';
import Swal from 'sweetalert2'

export default {
    props: ['cart'],
    methods: {
        ...mapActions(useRestaurantStore, ['patchQuantityCart', 'deleteCart']),
        whistListClicked() {
            Swal.fire('Feature coming soon!')
        }
    },
    computed: {
        price() {
            const total = this.cart.Product.price * this.cart.quantity
            return total.toLocaleString('id-ID', {style:"currency", currency:"IDR"})
        }
    }
}
</script>

<template>
    <!-- Single item -->
    <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <!-- Image -->
            <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img :src="cart.Product.imageUrl" class="w-100"
                    alt="Blue Jeans Jacket" />
            </div>
            <!-- Image -->
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <!-- Data -->
            <p><strong>{{ cart.Product.name }}</strong></p>
            <button type="button" class="btn btn-primary btn me-1 mb-2" data-mdb-toggle="tooltip" @click="deleteCart(cart.id)"
                title="Remove item">
                <i class="fas fa-trash"></i>
            </button>
            <button type="button" class="btn btn-danger btn mb-2" data-mdb-toggle="tooltip" @click="whistListClicked"
                title="Move to the wish list">
                <i class="fas fa-heart"></i>
            </button>
            <!-- Data -->
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <!-- Quantity -->
            <div class="d-flex mb-4" style="max-width: 300px; margin-left: 75px; margin-top: 27px;">
                <button class="btn btn-primary me-2" @click="patchQuantityCart(-1, cart.id)" :disabled="cart.quantity <= 1">
                    <i class="fas fa-minus"></i>
                </button>

                <div class="mx-3">
                    <h5> {{ cart.quantity }} </h5>
                </div>

                <button class="btn btn-primary ms-2" @click="patchQuantityCart(1, cart.id)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <!-- Quantity -->

            <!-- Price -->
            <p class="text-start text-md-center">
                <strong>{{ price }}</strong>
            </p>
            <!-- Price -->
        </div>
    </div>
    <!-- Single item -->
    <hr class="my-4" />
</template>