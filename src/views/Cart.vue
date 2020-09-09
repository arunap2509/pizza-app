<template>
  <div class="cart-container">
    <h2 class>My Orders</h2>
    <div class="cart-cards" v-for="item in cart" :key="item.id">
      <CartCard :item="item" />
    </div>
    <div class="total">
        <button class="continue" @click="toHome">Continue Shopping</button>
        <button class="total-amount">Total: Rs {{totalAmount}}</button>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue';
import { mapState } from 'vuex';

export default {
  name: "cart",
  components: {
    CartCard
  },
  computed: {
    ...mapState(['cart', 'totalAmount'])
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
    .cart-container {
        width: 1000px;
        min-height: 200px;
        margin: auto;
        border-radius: 5px;
    }
    h2 {
      text-align: center;
      color:#fff;
    }
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
    }

    button {
      border: none;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      transform: scale(1.2);
    }

    button:active, button:focus {
      outline: none;
    }
    .continue {
      padding: 10px 20px;
      background-color: green;
      border-radius: 5px;
      font-weight: bold;
    }

    .total-amount {
      padding: 10px 20px;
      background-color: blue;
      border-radius: 5px;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .cart-cards {
      margin: 20px;
    }
</style>