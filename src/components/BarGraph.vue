<template>
    <div class="container">
      <h1>World Wine Production</h1>
      <div class="chart">
        <div class="bar" :style="{ height: earphonesHeight + 'px' }">
          <span class="label">Earphones</span>
        </div>
        <div class="bar" :style="{ height: laptopHeight + 'px' }">
          <span class="label">Laptop</span>
        </div>
        <div class="bar" :style="{ height: smartphoneHeight + 'px' }">
          <span class="label">SmartPhone</span>
        </div>
      </div>
      <hr>
      <!-- <p>Source:  </p> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarGraph',
    data() {
        
      return {
        earphonesHeight: 70,
        laptopHeight: 99,
        smartphoneHeight: 44,
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
  }
  
  .chart {
    display: flex;
    justify-content: space-around;
    width: 600px;
    margin-top: 20px;
  }
  
  .bar {
    width: 80px;
    background-color: red;
    margin-top: 20px;
    position: relative;
  }
  
  .bar:nth-child(2) {
    background-color: green;
  }
  
  .bar:nth-child(3) {
    background-color: blue;
  }
  
  .label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
  }
  </style>