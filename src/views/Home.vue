<template>
  <div class="pizza-card">
    <div class="card" v-for="pizza in pizzas" :key="pizza.id">
      <div class="card-header">
        <img :src="pizza.image" alt="pizza" />
      </div>
      <div class="card-body">
        <h5>{{pizza.name}}</h5>
        <p>
          {{pizza.description}}
        </p>
        <small class="price">Rs.{{pizza.price}}</small>
        <a @click="addToCart(pizza)" class="cta">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      pizzas: [
        {
          id: 1,
          name: "Double Cheese Margherita",
          image: '/images/double-cheese-margherita-pizza.jpg',
          price: 350, 
          description: "The ever-popular Margherita - loaded with extra cheese... oodies of it!"
        },
        {
          id: 2,
          name: "Farmhouse Pizza",
          image: '/images/farmhouse-pizza.jpg',
          price: 300,
          description: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes"
        },
        {
          id: 3,
          name: "Panner Pizza",
          image: '/images/paneer-pizza.jpg',
          price: 320,
          description: "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!"
        },
        {
          id: 4,
          name: "Veggie Deluxe Pizza",
          image: '/images/veggie-deluxe-pizza.png',
          price: 400, 
          description: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms"
        },
        {
          id: 5,
          name: "Mexican Green Wave Pizza",
          image: '/images/mexican-green-wave-pizza.jpg',
          price: 380,
          description: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."
        },
        {
          id: 6,
          name: "Margherita Pizza",
          image: '/images/margherita-pizza.jpg',
          price: 320, 
          description: "A hugely popular margherita, with a deliciously tangy single cheese topping"
        },
      ],
    };
  },
  methods: {
    addToCart(pizza) {
      const newPizzaObj = {...pizza, quantity: 1 }
      this.$store.dispatch('updateCartAction', newPizzaObj);
    }
  }
};
</script>

<style scoped>
.pizza-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
}

.card {
  background-color: rgb(90, 87, 99);
  border-radius: 5px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin-right: 20px;
  margin-top: 20px;
  min-height: 400px;
}

.card-header img {
  object-fit: cover;
  height: 200px;
  width: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.card-body h5 {
  margin: 10px 0;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 20px;
}
.card-body small {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #cac7df
}

.cta {
  text-decoration: none;
  color: #f2f2f2;
  background-color: #0b6e4f;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0.4rem 0;
  width: 10rem;
  text-align: center;
  box-shadow: 2px 4px 12px rgba(10, 88, 64, 0.2);
  cursor: pointer;
}

.cta:hover {
  box-shadow: 2px 4px 12px rgba(10, 88, 64, 0.35);
}
</style>