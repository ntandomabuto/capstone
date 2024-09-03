<template>
    <div>
        <div class="container">
            <h1>Stocks</h1>
        <button class="">Add Stock</button>
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Products</th>
                    <th>Category</th>
                    <th>Current Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stock in $store.state.stock" :key="stock.stock_id">
                    <td>{{ stock.code }}</td>
                    <td>{{ stock.products }}</td>
                    <td>{{ stock.category }}</td>
                    <td>{{ stock.current_stock }}</td>
                   
                </tr>
            </tbody>
        </table>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        getStock(){
            this.$store.dispatch('getStock')
        }
    },
    mounted(){
        this.getStock()
    }
        
}
</script>
<style scoped>
    .container {
  width: 80%;
  margin: 130px;
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
</style>