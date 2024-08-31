<template>
    <div class="container-fluid p-3 text-center">
        <footer class="footer">
        <a href="https://www.linkedin.com/in/ntando-mabuto-127a72316/" target="_blank"><i class="fab fa-linkedin fa-xl" aria-hidden="true" style="color:#dddddd"></i></a> 
        <a href="https://github.com/ntandomabuto" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #dddddd;"></i></a>
        <div class="footer-container container">
    <p>Designed and developed by <b>Ntando Mabuto</b></p>
    Copyright ©{{ year }}. All Rights Reserved
        </div>
    </footer>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  .container-fluid {
    padding: 0;
    margin: 0;
    width: 100%;
    background:#2c3e50;
    color: white;
  }
/*   
  i {
    font-size: 1.2rem;
    margin-inline: .2rem;
  }
  
  p {
    margin: 0;
  } */
  </style>
  