<template>
    <div id="order">
        <h1>Orders</h1>
        <section >
            <div class="container">
    <h3>Orders list</h3>
    <div class="controls">
      <button class="filter">Filter</button>
      <button class="pdf">Pdf</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>DATE</th>
          <th>REFERENCE</th>
          <th>FROM WAREHOUSE</th>
          <th>TO WAREHOUSE</th>
          <th>TOTAL ITEMS</th>
          <th>GRAND TOTAL</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in $store.state.order" :key="order.tra_id">
          <td>
            <input type="checkbox" />
          </td>
          <td>{{ order.date }}</td>
          <td>{{ order.reference }}</td>
          <td>{{ order.from_warehouse }}</td>
          <td>{{ order.to_warehouse }}</td>
          <td>{{ order.total_items }}</td>
          <td>{{ order.total_price }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button class="view">View</button>
            <button class="edit"><i class="fa-duotone fa-solid fa-pen"></i></button>
            <button class="delete" @click="deleteOrder(order.tra_id)"><i class="fa-duotone fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

        </section>
    </div>
</template>
<script>
export default {
    methods:{
        getOrders(){
            this.$store.dispatch('getOrders')
        },
        deleteOrder(){
            this.$store.dispatch('deleteOrder')
        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>
<style >
.container {
  width: 80%;
  /* margin: 0 auto; */
  /* padding: 20px; */
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter,.excel,.pdf,.import,.create-transfer {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter {
  background-color: #f0f0f0;
}

.excel {
  background-color: #4CAF50;
  color: white;
}

.pdf {
  background-color: #f44336;
  color: white;
}

.import {
  background-color: #4CAF50;
  color: white;
}

.create-transfer {
  background-color: #008CBA;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.view,
.edit{
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

/* .view {
  background-color: #4CAF50;
  color: white;
} */

.edit {
  background-color: #008CBA;
  color: white;
}

.delete {
  background-color: #f44336;
  /* border-radius: 5rex; */
  color: white;
}
</style>