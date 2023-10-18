import {
    defineStore
} from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useRestaurantStore = defineStore('resto', {
    state: () => ({
        isLogin: false,
        baseUrl: 'https://hf.abobelajardihacktiv.xyz',
        featuredProducts: [],
        products: [],
        carts: [],
        categories: []
    }),
    actions: {
        swal(icon, title, text) {
            Swal.fire({
                icon,
                title,
                text,
                showConfirmButton: false,
                timer: 1500
            })
        },
        async fetchFeaturedProducts() {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/products/featured',
                    method: 'get'
                })
                this.featuredProducts = data
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async fetchProducts(params) {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/products',
                    method: 'get',
                    params
                })
                this.products = data
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async fetchCategories() {
            try {
                const { data } = await axios({
                    url: this.baseUrl + '/categories',
                    method: 'get'
                })
                this.categories = data
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async discordLogin(params) {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/discord-login',
                    method: 'get',
                    params
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                console.log(data)
                this.$router.push('/')
                this.swal('success', 'Wellcome!', 'Login success')
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        logout() {
            localStorage.clear()
            this.isLogin = false
            this.$router.push('/')
            this.swal('success', 'Good Bye', 'Hope you comeback later')
        },
        async fetchCarts() {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/carts',
                    method: 'get',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.carts = data
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async patchQuantityCart(val, id) {
            try {
                console.log(val)
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/carts/' + id,
                    method: 'patch',
                    data: {
                        qty: val
                    },
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.fetchCarts()
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async addCart(productId) {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/carts/' + productId,
                    method: 'post',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.$router.push('/cart')
                this.fetchCarts()
                console.log(data)
                this.swal('success', 'Success', 'Add to cart')
            } catch (err) {
                console.log(err)
                this.$router.push('/')
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async deleteCart(id) {
            try {
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                if (result.isConfirmed) {
                    const {
                        data
                    } = await axios({
                        url: this.baseUrl + '/carts/' + id,
                        method: 'delete',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    this.fetchCarts()
                    console.log(data)
                    Swal.fire(
                        'Deleted!',
                        'Your order has been deleted.',
                        'success'
                    )
                }

            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async checkout() {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/checkout',
                    method: 'delete',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                console.log(data)
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        },
        async payment() {
            try {
                const {
                    data
                } = await axios({
                    url: this.baseUrl + '/generate-midtrans-token',
                    method: 'post',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                const callback = this.checkout
                const carts = this.fetchCarts
                // console.log(data)
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        callback()
                        carts()
                        console.log('a')
                    }
                })
            } catch (err) {
                console.log(err)
                this.swal('error', 'Oops...', err.response.data.message)
            }
        }
    }
})