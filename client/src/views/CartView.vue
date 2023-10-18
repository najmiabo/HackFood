<script>
import ItemCart from '../components/ItemCart.vue'
import { mapActions, mapState } from 'pinia';
import { useRestaurantStore } from '../stores/restaurant';

export default {
  components: {
    ItemCart
  },
  methods: {
    ...mapActions(useRestaurantStore, ['fetchCarts', 'payment']),
    getTotalAmount() {
      let total = 0
      const carts = this.carts
      carts.forEach((el) => {
        total += (el.quantity * el.Product.price)
      })
      return total.toLocaleString('id-ID', {style:"currency", currency:"IDR"})
    }
  },
  computed: {
    ...mapState(useRestaurantStore, ['carts'])
  },
  created() {
    this.fetchCarts()
    this.getTotalAmount()
  },
}
</script>

<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="d-flex">
        <div>
          <h3 class="mb-3"><a href="#!" @click.prevent="this.$router.push('/list')" class="text-body"><i class="fas fa-long-arrow-alt-left me-2"></i>Continue
            shopping</a></h3>
        </div>
        <div style="margin-left: auto;">
          <h3 class="mb-3"><a href="#!" @click.prevent="this.$router.push('/')" class="text-body">Back to Home <i class="fas fa-long-arrow-alt-right me-2"></i></a></h3>
        </div>
      </div>
      
      <hr>
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Cart - {{ carts.length }} items</h5>
            </div>
            <div class="card-body">
              <ItemCart v-for="cart in carts" :key="cart" :cart="cart"/>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p><strong>Delivery Soon</strong></p>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body">
              <p><strong>We accept</strong></p>
              <img class="me-2" width="60px" style="margin: 0 20px;"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/1024px-Logo_ovo_purple.svg.png"
                alt="OVO" />
              <img class="me-2" width="60px" style="margin: 0 20px;"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
                alt="BRI" />
              <img class="me-2" width="60px" style="margin: 0 20px;"
                src="https://1.bp.blogspot.com/-ENNeQXUXMPg/XwcgZZAcfRI/AAAAAAAAGlU/NdqxwMCYyNA49bSME2QHNmwJ-jBD-99PACK4BGAsYHg/s1000/logo-gopay.png"
                alt="Gopay" />
              <img class="me-2" width="60px" style="margin: 0 20px;"
                src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BCA-PNG.png"
                alt="BCA" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Harga
                  <span>{{ getTotalAmount() }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Ongkir
                  <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>{{ getTotalAmount() }}</strong></span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn btn-block" @click="payment">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>