<template>
  <div class="app">
    <div class="drag">
      <navbar-comp/> 
      <spinner-comp v-if="loading"/>
      <router-view/>
    </div>
    <footer-comp/>


  </div>
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
// import SpinnerComp from './components/SpinnerComp.vue';

export default{
  components:{
    NavbarComp,
    FooterComp,
    // SpinnerComp
  },
  // data(){
  //   return{
  //     loading:true
  //   }
  // },
  // mounted(){
  //   setTimeout(()=>{
  //     this.loading= false
  //   },3000)
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:hidden;
}
.drag{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

@media (max-width: 600px) {
  .app {
    flex-direction: row;
  }
  nav {
    padding: 20px;
  }
}
</style>
