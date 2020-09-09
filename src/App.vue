<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="css">
  * {
    box-sizing: border-box;
  }
  
   body { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    background: url('../public/images/pizza.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
    z-index: -1;
    overflow: scroll;
  }

  #app {
    width: 100%;
    margin: auto;
  }

  a { 
      text-decoration: none;
      color:#fff;
  }

  ul { 
      list-style: none;
  }

</style>
