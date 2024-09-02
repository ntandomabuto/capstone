<template>
  <div class="app" style="height: 120vh;">
    
    <navbar-comp/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |    
      <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" to="/report">Report
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="/order">Orders</router-link></li>
        </ul>
      </router-link>  
    </nav> -->
    <router-view/>
    <footer-comp/>



  </div>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default{
  components:{
    NavbarComp,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4442b9;
}
body{
  background-image: linear-gradient(rgb(148, 200, 200),rgb(221, 220, 220),rgb(148, 200, 200));
  background-size: inherit;
  /* background-repeat: no-repeat; */
}
*{
  font-family: 'Courier New', Courier, monospace;
}
</style>
