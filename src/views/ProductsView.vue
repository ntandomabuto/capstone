<template>
    <div>
        <div class="container">
           <h1>Products List</h1>
        <button class="pdf"><a href=" https://ntandomabuto.github.io/images/products.pdf" target="_blank">PDF</a></button>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <!-- <th>Description</th> -->
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in $store.state.product" :key="product.prod_id">
                    <td><img :src="product.prod_url"/></td>
                    <td>{{product.prod_name}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.brand}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.quantity}}</td>
                    <!-- <td>{{product.prod_description}}</td> -->
                    <td><a href="/single" @click="getProduct( )"><i class="fa-duotone fa-solid fa-eye"></i></a></td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
    <hr>
</template>
<script>
export default {
    methods:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        getProduct(prod_id){
            this.$store.dispatch('getProduct',prod_id)
        }
    },
    mounted(){
        this.getProducts()
        // this.getProduct()
    }       
}
</script>
<style scoped>
    .pdf {
  background-color: #f44336;
}
.pdf a{
    color:#ddd;
    text-decoration: none;
    padding: 5px;
}

.container {
  width: 80%;
  margin-top: 50px;
  /* margin: 0 auto; */
  /* padding: 20px; */
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.pdf {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}




.pdf {
  background-color: #f44336;
  /* color: white; */
}
.pdf a{
    color:#ddd;
    text-decoration: none;
    padding: 5px;
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