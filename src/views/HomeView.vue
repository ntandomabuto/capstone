<template>
  <div class="home" >
    <h1>Dashboard</h1>
    <!-- <spinner-comp v-if="loading"/> -->
    <bar-graph/>
    <div class="tables">
    <div class="tab">
      <h3>Stock Alert</h3>
      <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Product</th>
          <th>Warehouse</th>
          <th>Quantity</th>
          <th>Alert Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stocka in $store.state.stocka" :key="stocka.st_id">
          <td>{{ stocka.code}}</td>
          <td>{{ stocka.product}}</td>
          <td>{{ stocka.warehouse}}</td>
          <td>{{ stocka.quantity}}</td>
          <td class="alert">{{ stocka.alert_quantity}}</td>
        </tr>
      </tbody>  
    </table>
    </div>
    <div class="tab2">
      <h3>Recent Invoices</h3>
      <table>
      <thead>
        <tr>
          <th>Ref. Code</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ref in $store.state.recent_invoice" :key="ref.in_id">
         <td>{{ ref.ref_code }}</td>
         <td>{{ ref.customer }}</td>
         <td>{{ ref.amount }}</td>
         <td :class="{ 'paid': ref.status === 'Paid', 'due':ref.status === 'Due' }">{{ ref.status }}</td>

        </tr>
      </tbody>  
    </table>
      
    </div>
    </div>
    <div class="container2">
    <h1>Recent Sales</h1>
    <table class="t">
      <thead>
        <tr>
          <th>REFERENCE</th>
          <th>CUSTOMER</th>
          <th>STATUS</th>
          <th>GRAND TOTAL</th>
          <th>PAID</th>
          <th>DUE</th>
          <th>PAYMENT STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rec in $store.state.recent_sales" :key="rec.rec_id">
          <td>{{ rec.reference }}</td>
          <td>{{ rec.customer }}</td>
          <td :class="{ 'completed': rec.status === 'Completed', 'incomplete': rec.status === 'Incomplete' }">{{ rec.status }}</td>
          <td>{{ rec.total }}</td>
          <td>{{ rec.paid }}</td>
          <td>{{ rec.due }}</td>
          <td :class="{ 'paid': rec.pay_status === 'Paid', 'due':rec.pay_status === 'Due' }">{{ rec.pay_status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<hr>
</template>

<script>
// @ is an alias to /src
import BarGraph from '@/components/BarGraph.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components:{
    BarGraph,
    SpinnerComp
  },
  data(){
    return{
      loading:true
    }
  },
  methods:{
    getStocka(){
      this.$store.dispatch('getStocka')
    },
    getRef(){
      this.$store.dispatch('getRef')
    },
    getRec(){
      this.$store.dispatch('getRec')
    }
  },
  mounted(){
    this.getStocka()
    this.getRef()
    this.getRec()
  }

}
</script>
<style scoped>
.home{
  margin-top: 50px;
}
  table {
  width: 30%;
  box-shadow: 2px 2px 5px 1px black;
  border-radius: 1rem;
}
h1{
    text-shadow: 1px 1px 0 black;
  }

.tables{
  display: flex;
  margin-left: 250px;
  padding-bottom: 50px;
}
.alert{
  color: red;
}
th,td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}
.t{
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
}
.completed {
  background-color: lightgreen;
}
.incomplete {
  color: red;
}
.paid {
  background-color: lightgreen;
}

.due {
  color: red;
}
@media screen and (max-width:320px) {
    *{
      font-size:xx-small;
      }
      .tables{
        display: grid;
        /* width: 10px; */
  margin-left: 2px;        
    }
    .t {
      width: 100px;
      margin: 10%;
    }
    
    
}
@media screen and (max-width:780px) {
    
      .tables{
        display: grid;
        margin: 10%;
    }
      .container2{
        /* display: grid; */
        margin-left: 5%;
    }
    
}
@media screen and (max-width:1040px) {
    
  .tables{
        display: grid;
        /* margin: 10%; */
    }
      .container2{
        /* display: grid; */
        margin-left: 5%;
    }
    
}
</style>
