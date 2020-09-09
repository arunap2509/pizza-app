<template>
  <div class="header">
      <div class="brand-name">
          <router-link to="/">Pizza House</router-link>
      </div>
      <nav class="nav-links">
          <ul>
              <li class="nav-item">
                  <router-link to="/orders">Orders</router-link>
                  <div class="cart-items">
                    {{quantity}}
                  </div>
                </li>
                <li class="nav-item">
                  <router-link to="/kitchen">Kitchen</router-link>
                </li>
          </ul>
      </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'app-header',
    computed: {
        ...mapState(['quantity'])
    }
}
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 20px 0;
        font-size: 15px;
        /* background-color: #2b0612; */
    }

    .brand-name {
        margin: 0 20px;
        font-size: 1.4rem;
        font-weight: bold;
    }

    .brand-name a {
        color: #ee2266;
    }

    .header ul { 
        display: flex;
    }

    .header ul li {
        padding: 0 20px;
    }

    .header ul li a {
        padding-bottom: 2px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #ee2266;
    }

    .header ul li a:hover {
        border-bottom: 2px solid #262626;
    }
    .cart-items {
        position: absolute;
        top: -5px;
        right: -5px;
        font-size: 12px;
        width: 20px;
        text-align: center;
        display: inline-block;
        border-radius: 100px;
        background-color: mediumseagreen;
    }
    .nav-item {
        display: inline-block;
        padding: 5px 10px;
        font-size: 22px;
        border-right: 1px solid #bbb;
        position: relative;
        margin-left: auto;
        border-right: none;
    }
</style>