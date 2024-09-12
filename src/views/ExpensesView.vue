<template>
    <div id="exp">
        <h1>Expenses list</h1>
        <section >
            <div class="container">
    <table>
      <thead>
        <tr>
          
          <th>DATE</th>
          <th>REFERENCE</th>
          <th>WAREHOUSE</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ex in $store.state.expenses" :key="ex.ex_id">
          <td>{{ ex.date}}</td>
          <td>{{ ex.reference}}</td>
          <td>{{ ex.warehouse}}</td>
          <td>{{ ex.category}}</td>
          <td>{{ ex.amount}}</td>
          <td>{{ ex.details}}</td>
         
         
          
        </tr>
      </tbody>
    </table>
    <hr>
  </div>

        </section>
    </div>
</template>
<script>
export default {
    methods:{
        getExpenses(){
            this.$store.dispatch('getExpenses')
        },
    },
    mounted(){
        this.getExpenses()
    }
}
</script>
<style scoped>
.container {
  width: 80%;

}


table {
  width: 100%;
  border-collapse: collapse;
}

th,td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}


.edit {
  background-color: #008CBA;
  color: white;
  border-radius: 2rem;
}

.delete {
  background-color: #f44336;
  border-radius: 2rex;
  color: white;
}
#exp{
    margin:60px;
}
</style>