<script>
import FeaturedCard from '../components/FeaturedCard.vue'
import Header from '../components/Header.vue'
import { mapState, mapActions } from 'pinia';
import { useRestaurantStore } from '../stores/restaurant';

export default {
  components: {
    FeaturedCard,
    Header
  },
  computed: {
    ...mapState(useRestaurantStore, ['featuredProducts'])
  },
  methods: {
    ...mapActions(useRestaurantStore, ['fetchFeaturedProducts', 'discordLogin'])
  },
  created() {
    console.log(this.$route.query)
    this.fetchFeaturedProducts()
    this.discordLogin(this.$route.query)
  }
}
</script>

<template>
    <Header />
    <main>
      <section class="featured py-5" id="features">
        <div class="container">
          <h2 class="text-dark fw-bold text-center pt-5 pb-5">
            Featured Food Items
          </h2>
        </div>

        <div class="container">
          <div class="row g-5">
            <FeaturedCard v-for="product in featuredProducts" :key="product.id" :product="product"/>
          </div>
        </div>
      </section>

      <section class="how-it-works" id="how">
        <div class="container">
          <h2 class="text-dark fw-bold text-center pt-5 pb-3">
            How FoodieXpress Works
          </h2>

          <div class="container py-5">
            <div class="row g-5">
              <div class="col-12 col-lg-6">
                <div
                  class="p-4 d-flex shadow-sm section-how-card flex-column justify-content-center rounded"
                >
                  <span><ion-icon class="icon" name="search"></ion-icon></span>
                  <h3 class="fw-bold text-dark how-it-works-title">
                    Browse our extensive menu
                  </h3>
                  <p class="how-it-works-text">
                    Discover a wide range of delectable dishes from various
                    cuisines. From appetizers and main courses to desserts and
                    beverages, we have something to satisfy every craving.
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="d-flex p-4 shadow-sm section-how-card flex-column justify-content-center rounded"
                >
                  <span><ion-icon class="icon" name="search"></ion-icon></span>
                  <h3 class="fw-bold text-dark how-it-works-title">
                    Place your order
                  </h3>
                  <p class="how-it-works-text">
                    Discover a wide range of delectable dishes from various
                    cuisines. From appetizers and main courses to desserts and
                    beverages, we have something to satisfy every craving.
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="d-flex p-4 shadow-sm section-how-card flex-column justify-content-center rounded"
                >
                  <span><ion-icon class="icon" name="search"></ion-icon></span>
                  <h3 class="fw-bold text-dark how-it-works-title">
                    Track your delivery
                  </h3>
                  <p class="how-it-works-text">
                    Sit back and relax as our dedicated delivery professionals
                    swiftly bring your order to your location. Monitor the
                    progress of your delivery in real-time and know exactly when
                    to expect your food.
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="d-flex p-4 shadow-sm section-how-card flex-column justify-content-center rounded"
                >
                  <span><ion-icon class="icon" name="search"></ion-icon></span>
                  <h3 class="fw-bold text-dark how-it-works-title">
                    Enjoy your meal
                  </h3>
                  <p class="how-it-works-text">
                    Once your order arrives, indulge in a flavorful dining
                    experience from the comfort of your own home. Our commitment
                    to quality ensures that every bite is a delight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container py-5">
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center text-center"
                      >
                        <div class="testimonial-card">
                          <img
                            src="/assets/sarah.jpg"
                            width="150px"
                            class="rounded-circle pb-4"
                            alt=""
                          />
                          <p class="testimonial-text pb-2">
                            HackFood has transformed the way I enjoy meals.
                            The convenience of ordering my favorite dishes from
                            local restaurants and having them delivered to my
                            doorstep is simply fantastic.
                          </p>
                          <h3 class="testimonials-name">Sarah M</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container py-5">
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center text-center"
                      >
                        <div class="testimonial-card">
                          <img
                            src="/assets/john.jpg"
                            width="150px"
                            class="rounded-circle pb-4"
                            alt=""
                          />
                          <p class="testimonial-text pb-2">
                            HackFood has transformed the way I enjoy meals.
                            The convenience of ordering my favorite dishes from
                            local restaurants and having them delivered to my
                            doorstep is simply fantastic.
                          </p>
                          <h3 class="testimonials-name">John j</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container py-5" id="contact">
        <div class="row">
          <div class="col-12 col-lg-4">
            <h3 class="fw-bold pb-3">Visit us</h3>
            <p>
                Jl. Arteri Pd. Indah No.7, <br>
                RT.5/RW.9,
                Kby. Lama Sel.,<br>
                Kec. Kby. Lama
            </p>
            <a href="https://www.hacktiv8.com/" class="text-dark"
              >hacktiv8.com</a
            >
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="fw-bold pb-3">Our Link</h3>
            <div class="d-flex flex-column">
              <router-link to="/" class="text-dark">Home</router-link>
              <a href="#how" class="text-dark">How it works</a>
              <a href="#features" class="text-dark">Features</a>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="fw-bold pb-3">Our Link</h3>
            <div class="d-flex">
              <a href="https://github.com/najmiabo" class="text-dark px-3"
                ><ion-icon name="logo-github" class="icon"></ion-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center copyright"> &copy; 2023 all right reserved by HackFood</p>
    </footer>
</template>
