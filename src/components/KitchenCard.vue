<template>
  <div class="kitchen-card">
      <div class="pizza-main-info">
          <div class="pizza-info">
              <h3> OrderId: {{pizza.orderAndAction.orderId}}</h3>
              <h2>{{pizza.name}}</h2>
          </div>
            <div class="action-change">
                <button @click="updateCurrentAction(pizza.orderAndAction.orderId, 1)" :class="{active : pizza.orderAndAction.action === 1}" class="action add">Added</button>
                <button @click="updateCurrentAction(pizza.orderAndAction.orderId, 2)" :class="{active : pizza.orderAndAction.action === 2}" class="action cook">Cooking</button>
                <button @click="updateCurrentAction(pizza.orderAndAction.orderId, 3)" :class="{active : pizza.orderAndAction.action === 3}" class="action ready">Ready To Serve</button>
            </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'kitchen-card',
    props: ['pizza'],
    data() {
        return { 
            activeAction: 3
        }
    },
    methods: {
        ...mapActions(['updateOrderAction']),
        updateCurrentAction(orderId, action) {
            this.updateOrderAction({orderId, action});
        }
    }
}
</script>

<style scoped>
    .kitchen-card {
        background-color:#f6edf7;
        border-radius: 5px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 300px;
        margin-right: 20px;
        margin-top: 20px;
        height: 100px;
    }
    .pizza-main-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .pizza-info h3 {
        text-align: center;
        margin: 2px 0 0 2px;
        color: #000;
    }
    .pizza-info h2 {
        margin: 3px 0 3px 0;
        color: #000;
    }
    button {
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
    }
    button:focus, button:active {
        outline: none;
    }
    .action {
        margin: 0 4px;
    }
    .active.add {
        background-color: #6581e6;
    }
    .active.cook {
        background-color: #a4a81d;
    }
    .active.ready {
        background-color: #ed2f59;
    }
</style>