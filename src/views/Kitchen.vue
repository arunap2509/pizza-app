<template>
   <div class="kitchen-container">
    <h2 class>Kitchen</h2>
    <div class="kitchen-cards">
        <div class="cards" v-for="item in itemsList" :key="item.orderAndAction.orderId">
            <KitchenCard :pizza="item" />
        </div>
    </div>
  </div>
</template>

<script>

import KitchenCard from '../components/KitchenCard.vue';
import { mapState } from 'vuex';

export default {
    name: "kitchen",
    components: {
        KitchenCard
    },
    computed: {
        ...mapState(['cart']),
        itemsList() {
            const orders = [];
            this.cart.forEach((el) => {
                if(el.quantity === 1) {
                    if(el.orderIdAndAction[0].action !== 3)
                    orders.push({...el, orderAndAction: el.orderIdAndAction[0]});
                } else {
                    for(let i = 0; i < el.quantity; i++)
                    {   
                        if(el.orderIdAndAction[i].action !== 3) {
                            orders.push({...el, orderAndAction: el.orderIdAndAction[i]})
                        }
                    }      
                }
            });
            return orders.sort((a, b) => a.orderAndAction.orderId - b.orderAndAction.orderId);
        }
    }
}
</script>

<style scoped>
    .kitchen-container {
        width: 100%;
    }
    h2 {
      text-align: center;
      color:#fff;
    }
    .kitchen-cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>