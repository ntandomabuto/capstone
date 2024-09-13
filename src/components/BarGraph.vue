<template>
  <button class="btn btn-secondary"><a href="/about" class="a">Sign Up</a></button>
    <div class="container">
      <h3><u>Top selling products</u></h3>
      <div class="chart">
        <div class="x-axis">
        <span>100</span>
        <span>80</span>
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>
        <div class="bar" :style="{ height: earphonesHeight + 'px' }">
          <span class="label">Earphones</span>
        </div>
        <div class="bar" :style="{ height: laptopHeight + 'px' }">
          <span class="label">Laptop</span>
        </div>
        <div class="bar" :style="{ height: smartphoneHeight + 'px' }">
          <span class="label">SmartPhone</span>
        </div>
        <div class="bar" :style="{ height: cameraHeight + 'px' }">
          <span class="label">Camera</span>
        </div>
        <div class="bar" :style="{ height: tabletHeight + 'px' }">
          <span class="label">Tablet</span>
        </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'BarGraph',
    data() {
        
      return {
        earphonesHeight: 80,
        laptopHeight: 99,
        smartphoneHeight: 150,
        cameraHeight: 44,
        tabletHeight: 100,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 15px;
    /* background-color: rgb(206, 235, 235); */
    width: 450px;
    height: 260px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px grey;
  }
  
  .x-axis {
  display: grid;
  justify-content: space-between;
  width: 20%;
  margin-bottom: -15px;
}

.x-axis span {
  font-size: 20px;
}
  .chart {
    display: flex;
    justify-content: space-around;
    width: 400px;
    margin-top: 20px;
  }
  .a{
    color: aliceblue;
    text-decoration: none;
  }
  .bar {
    width: 80px;
    background-color: red;
    margin-top: 50px;
    position:relative;
    margin-top:auto;
  }
  
  .bar:nth-child(2) {
    background-color: green;
    margin-right: 30px;
}

.bar:nth-child(3) {
    background-color: blue;
    margin-right: 30px;
  }
.bar:nth-child(4) {
    background-color: rgb(255, 0, 200);
    margin-right: 30px;
  }
.bar:nth-child(5) {
    background-color: rgb(191, 255, 0);
    margin-right: 30px;
  }
  
  .label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
  }
  /* .bar span{
    
  } */
  @media screen and (max-width:320px) {
   
      .bar{
    width: 5px;    
    margin-left: -50px;    
    }
    .chart{
        width: 290px;
    }
    .container{
        width: 300px;
    }
    
    
}
  </style>