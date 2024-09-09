<template>
    <div>
        <div class="container">
           <h1>Products List</h1>
        <button class="pdf"><a href=" https://ntandomabuto.github.io/images/products.pdf" target="_blank">PDF</a></button>
        <div class="product-container">
        <button id="addProductBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addProduct">Add Product</button>
      </div>
      <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductLabel">Add Product on the list</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addProductForm">
                <div class="mb-3">
                  <label for="productNum" class="form-label">Product name</label>
                  <input type="text" class="form-control" id="productNum" name="productNum" v-model="prod_name">
                </div>
                <div class="mb-3">
                  <label for="productCat" class="form-label">Category</label>
                  <input type="text" class="form-control" id="productCat" name="productCat" v-model="category">
                </div>
                <div class="mb-3">
                  <label for="productBra" class="form-label">Brand</label>
                  <input type="text" class="form-control" id="productBra" name="productBra" v-model="brand">
                </div>
                <div class="mb-3">
                  <label for="productNum" class="form-label">Price</label>
                  <input type="number" class="form-control" id="productNum" name="productNum" v-model="price">
                </div>
                <div class="mb-3">
                  <label for="productQuantity" class="form-label">Quantity</label>
                  <input type="number" class="form-control" id="productQuantity" name="productQuantity" v-model="quantity">
                </div>
                <div class="mb-3">
                  <label for="productImg" class="form-label">Enter Image URL</label>
                  <input type="url" class="form-control" id="productImg" name="productAmount" v-model="prod_url">
                </div>
                <div class="mb-3">
                  <label for="productDesc" class="form-label">Description</label>
                  <input type="text" class="form-control" id="productDesc" name="productDesc" v-model="prod_description">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" id="saveProduct" @click="addProduct()">Add Product</button>
            </div>
          </div>
        </div>
      </div>

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
                    <td><router-link :to="{name:'single',params:{id:product.prod_id}}" class="link-no-decoration"><i class="fa-duotone fa-solid fa-eye"></i></router-link>
                        <button class="delete" @click="deleteProduct(product.prod_id)"><i class="fa-duotone fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
    <hr>
</template>
<script>
export default {
    data(){
        return{
            prod_name:'',
            category:'',
            brand:'',
            price:'',
            quantity:'',
            prod_url:'',
            prod_description:''
        }
    },
    methods:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        // getProduct(prod_id){
        //     this.$store.dispatch('getProduct',prod_id)
        // },
        deleteProduct(prod_id){
            this.$store.dispatch('deleteProduct',prod_id)
            console.log('deleted successfully');
            location.reload()
            
        },
        addProduct(){
            this.$store.dispatch('addProduct',this.$data)
            location.reload()
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



.delete {
  background-color: #f44336;
  border-radius: 2rex;
  color: white;
  margin: 5px;
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