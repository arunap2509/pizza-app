<template>
  <div class="cart-card">
      <div class="pizza-main-info">
          <div class="pizza-info">
              <h3>{{item.name}}</h3>
              <small class="amount">Amount: {{item.price}}</small>
          </div>
          <div class="cart-action">
              <button :class="{hide: added <= 0 }" class="current-action-btn add">
                  x {{added}} Added...</button>
              <button :class="{hide: cooking <= 0 }" class="current-action-btn cook">
                  x {{cooking}} Cooking...</button>
              <button :class="{hide: ready <= 0 }" class="current-action-btn ready">
                  x {{ready}} Ready To Serve...</button>
          </div>
            <div class="quantity-change">
                <button @click="addQuantity(item)" class="cart-qty plus">+</button>
                <button @click="subtractQuantity(item)" class="cart-qty minus">-</button>
            </div>
            <div class="quantity">
                <small> x {{item.quantity}}</small>
            </div>
            <div class="product-total">
                <h5>Rs: {{item.quantity * item.price}}</h5>
            </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'cart-card',
    props: ['item'],
    computed: {
        added() {
            let addedStage = 0;
            this.item.orderIdAndAction.forEach((el) => {
                if(el.action === 1) {
                    addedStage += 1;
                }
            });
            return addedStage;
        },
        cooking() {
            let cookingStage = 0;
            this.item.orderIdAndAction.forEach((el) => {
                if(el.action === 2) {
                    cookingStage += 1;
                }
            });
            return cookingStage;
        },
        ready() {
            let readyStage = 0;
            this.item.orderIdAndAction.forEach((el) => {
                if(el.action === 3) {
                    readyStage += 1;
                }
            });
            return readyStage;
        }
    },
    methods: {
        ...mapActions(['updateCartAction', 'removeFromCartAction']),
        addQuantity(pizza) {
            this.updateCartAction(pizza);
        },
        subtractQuantity(pizza) {
            this.removeFromCartAction(pizza);
        }
    }
}
</script>

<style scoped>
    .cart-card {
        background-color:#cacfca;
        border-radius: 5px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 1000px;
        margin-right: 20px;
        margin-top: 20px;
        min-height: 80px;
    }
    .pizza-main-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pizza-info {
        color: #000;
        margin: 10px;
    }
    .amount {
        font-weight: bold;
    }
    .cart-qty {
        padding: 5px 10px;
        margin: 10px;
        width: 40px;
        border: none;
        color: white;
        text-decoration: none;
        cursor: pointer;
        display: inline-block;
        border-radius: 3px;
    }
    button:focus, button:active {
        outline: none;
    }
    .plus {
        background-color: #4caf50;
    }
    .minus {
        background-color: #b81b30;
    }
    .quantity {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 20px;
        color: #000;
    }
    .product-total {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 20px;
        color: #000;
    }
    .current-action-btn {
        padding: 8px 15px;
        width: 200px;
        text-decoration: none;
        border: none;
        background-color:#e3d0cf;
        border-radius: 5px;
        margin: 3px;
    }
    .current-action-btn.add {
        background-color: #6581e6;
        font-weight: bold;
    }
    .current-action-btn.cook {
        background-color: #a4a81d;
        font-weight: bold;
    }
    .current-action-btn.ready {
        background-color: #ed2f59;
        font-weight: bold;
    }
    .cart-action {
        display: flex;
        flex-direction: column;
    }
    .hide {
        display: none;
    }
</style>