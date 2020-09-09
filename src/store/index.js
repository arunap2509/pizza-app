import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: JSON.parse(window.localStorage.getItem('cart')) || [],
    totalAmount: JSON.parse(window.localStorage.getItem('price')) || 0,
    quantity: JSON.parse(window.localStorage.getItem('quantity')) || 0,
    lastOrderId: JSON.parse(window.localStorage.getItem('lastOrderId')) || 0,
  },
  mutations: {
    updateCart(state, payload) {
      let isAlreadyAdded = state.cart.some((el) => el.id === payload.id);

      if(isAlreadyAdded) {
        state.cart.forEach((el) => {
          if(el.id === payload.id) {
            el.quantity += 1;
            el.orderIdAndAction.push({orderId: state.lastOrderId + 1, action: 1});
            state.lastOrderId += 1;
            addLastOrderIdToLocalStorage(state);
          }
        })
      } else {
        const item = {...payload, orderIdAndAction: [{orderId: state.lastOrderId + 1, action: 1}]}
        state.cart.push(item);
        state.lastOrderId += 1;
        addLastOrderIdToLocalStorage(state);
      }
    },
    updateTotal(state, payload) {
      state.totalAmount += payload;
    },
    updateQuantity(state) {
      state.quantity += 1;
    },
    updateActionStage(state, payload) {
      state.cart.forEach((el) => {
        el.orderIdAndAction.forEach((item) => {
          if(item.orderId === payload.orderId) {
            item.action = payload.action;
          }
        });
      });
    },
    removeFromCart(state, payload) {
      state.cart.forEach((el, idx) => {
        if(el.id === payload.id) {
            if(el.quantity - 1 === 0) {
              state.cart.splice(idx, 1);
            } else {
              el.quantity -= 1;
              el.orderIdAndAction.splice(el.orderIdAndAction.length - 1, 1);
            }
        }
      })
    },
    removeFromQuantity(state) {
      state.quantity -= 1;
    },
    removeFromTotal(state, payload) {
      state.totalAmount -= payload.price;
    }
  },
  actions: {
    updateCartAction({commit, state}, payload) {
      commit('updateCart', payload);
      commit('updateTotal', payload.price);
      commit('updateQuantity');

      addToLocalStorage(state);

    },
    updateOrderAction({commit, state}, payload) {
      commit('updateActionStage', payload);

      addToLocalStorage(state);
    },
    removeFromCartAction({commit, state}, payload) {
      commit('removeFromCart', payload);
      commit('removeFromTotal', payload);
      commit('removeFromQuantity');

      addToLocalStorage(state);
    }
  },
  getters: {
    getQuantity : (state) => state.quantity,
    getTotal : (state) => state.totalAmount,
    getCartDetails : (state) => state.cart
  },
})

function addToLocalStorage(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
      window.localStorage.setItem('quantity', JSON.stringify(state.quantity))
      window.localStorage.setItem('price', JSON.stringify(state.totalAmount))
}
function addLastOrderIdToLocalStorage(state) {
    window.localStorage.setItem('lastOrderId', JSON.stringify(state.lastOrderId));
}