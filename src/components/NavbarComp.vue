<template>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <!-- <router-link class="navbar-brand" to="" id="title"><img src="https://erin-caitlin.github.io/nodeEOMP.images/images/Brand Logo.png" alt="logo" loading="lazy"></router-link> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  flex-column">
            <li class="nav-item"><router-link class="nav-link" to="/"><img src="https://ntandomabuto.github.io/images/SIW.png" style="width: 5rem;"></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/"><i class="fa-duotone fa-solid fa-grip"></i> Dashboard</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" to="/products">Products</router-link></li> -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Reports</a>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/order">Orders</router-link></li>
                    <li><router-link class="dropdown-item" to="/products">Products</router-link></li>
                    <li><router-link class="dropdown-item" to="/expenses">Expenses</router-link></li>
                    <li><router-link class="dropdown-item" to="/stock">Stock</router-link></li>
                </ul>
            </li>
            <li class="nav-item"><router-link class="nav-link" to="/user"><i class="fa-duotone fa-solid fa-user"></i>Profile</router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" to="/settings">settings</router-link></li> -->
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  }
  </script>
  
  <style scoped>
 
  /* .navbar {
    background:#2c3e50;
  }
  
  .nav-link {
    color: #ffffff;
  }
  
  .navbar .nav-link:hover {
    color: #5689b9;
  }
  
  .navbar .dropdown-menu .dropdown-item:hover {
    background-color: #5689b9;
    color: #ffffff;
  }  */
   li{
    margin-top: 10px;
    margin-bottom: 30px;
   }
   .dropdown-menu{
    background: rgb(163, 203, 203);
   }
   img{
    border-radius: 10rem;
   }
   .navbar{
    width: 200px;
    
   }
  </style>