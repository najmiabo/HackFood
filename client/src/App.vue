<script>
import Header from './components/Header.vue'
import { mapWritableState } from 'pinia';
import { useRestaurantStore } from './stores/restaurant';

export default {
  components: {
    Header
  },
  computed: {
    ...mapWritableState(useRestaurantStore, ['isLogin'])
  },
  created() {
    const access_token = localStorage.access_token
    if (access_token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<template>
    <routerView />
    
</template>