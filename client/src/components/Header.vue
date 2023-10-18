<script>
import { mapActions, mapState } from 'pinia';
import { useRestaurantStore } from '../stores/restaurant';

export default {
  methods: {
    ...mapActions(useRestaurantStore, ['discordLogin', 'logout'])
  },
  computed: {
    ...mapState(useRestaurantStore, ['isLogin'])
  }
}
</script>

<template>
    <header class="bg-header">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand text-white fw-bold" href="/" data-bs-toggle="tooltip" data-bs-title="FoodieXpress" data-bs-placement="bottom">HackFood</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item px-2">
                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#how">How it works</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#features">Features</a>
              </li>
              <li class="nav-item px-2">
                <router-link class="nav-link" to="/list">Food List</router-link>
              </li>
              <li class="nav-item px-2" v-if="isLogin">
                <a class="nav-link" @click.prevent="logout" href="#">Logout <i class="fa-solid fa-right-from-bracket"></i></a>
              </li>
              <li class="nav-item px-3" v-if="!isLogin">
                <a class="nav-link cta" href="https://discord.com/api/oauth2/authorize?client_id=1156139608820699176&redirect_uri=https%3A%2F%2Fhackfood-b54c2.web.app&response_type=code&scope=identify"><i class="fa-brands fa-discord"></i> Login With Discord</a>
              </li>
              <li class="nav-item px-3" v-else>
                <router-link class="nav-link cta" to="/cart">Cart <i class="fas fa-cart-shopping"></i></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="hero-section py-5" >
        <div class="container py-3">
          <div class="row g-5">
            <div class="d-flex align-items-center justify-content-between">
              <div class="col-12 col-lg-6">
                <h1 class="text-white fw-bold">
                  Delicious Delivered: Discover a World of Flavors at Your
                  Doorstep
                </h1>
                <p class="text-white pt-4">
                  Discover a wide range of delectable dishes from various
                  cuisines. From appetizers and main courses to desserts and
                  beverages, we have something to satisfy every craving.
                </p>
                <router-link to="/list" class="btn btn-success mt-5">Order Now</router-link>
              </div>
              <div class="col-lg-6">
                <div class="d-flex justify-content-end">
                  <img src="/assets/chef-undraw.png" class="hero-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
</template>