<template>
    <div id="order">
        <h1>Orders</h1>
        <section >
            <div class="container">
    <h3>Orders list</h3>
    <div class="controls">
      <!-- <button class="filter">Filter</button> -->
      <div class="admin-container">
        <button id="adminAddProductBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddProduct">Add Order</button>
      </div>
      <div class="modal fade" id="adminAddProduct" tabindex="-1" aria-labelledby="adminAddProductLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adminAddProductLabel">Order</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addProductForm">
                <div class="mb-3">
                  <label for="productNum" class="form-label">Ref number</label>
                  <input type="number" class="form-control" id="productNum" name="productNum" v-model="reference">
                </div>
                <div class="mb-3">
                  <label for="productNum" class="form-label">From Warehouse</label>
                  <input type="text" class="form-control" id="productNum" name="productNum" v-model="from_warehouse">
                </div>
                <div class="mb-3">
                  <label for="productNum" class="form-label">To Warehouse</label>
                  <input type="text" class="form-control" id="productNum" name="productNum" v-model="to_warehouse">
                </div>
                <div class="mb-3">
                  <label for="productName" class="form-label">Items name</label>
                  <input type="text" class="form-control" id="productName" name="productName" required>
                </div>
                <div class="mb-3">
                  <label for="productQuantity" class="form-label">Total Items</label>
                  <input type="number" class="form-control" id="productQuantity" name="products" v-model="total_items">
                </div>
                <div class="mb-3">
                  <label for="productAmount" class="form-label">Price</label>
                  <input type="number" class="form-control" id="productAmount" name="productAmount" v-model="total_price">
                </div>
                <div class="mb-3">
                  <label for="productAmount" class="form-label">status</label>
                  <input type="text" class="form-control" id="productStatus" name="productStatus" v-model="status">
                </div>
                
                <div class="mb-3">
                  <label for="productCategory" class="form-label">Date</label>
                  <input type="date" class="form-control" id="productCategory" name="productCategory" v-model="date">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" id="saveProduct" @click="insertOrder()">Send Request</button>
            </div>
          </div>
        </div>
      </div>
      <button class="pdf"><a href=" https://ntandomabuto.github.io/images/Orders.pdf" target="_blank">pdf</a></button>
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
          <td><p>{{ order.status }}</p></td>
          <td>
            <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductLabel">Edit Order</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="editProductForm">
          <div class="mb-3">
            <label for="productNum" class="form-label">Ref number</label>
            <input type="number" class="form-control" id="productNum" name="productNum" v-model="order.reference">
          </div>
          <div class="mb-3">
            <label for="productNum" class="form-label">From Warehouse</label>
            <input type="text" class="form-control" id="productNum" name="productNum" v-model="order.from_warehouse">
          </div>
          <div class="mb-3">
            <label for="productNum" class="form-label">To Warehouse</label>
            <input type="text" class="form-control" id="productNum" name="productNum" v-model="order.to_warehouse">
          </div>
       
          <div class="mb-3">
            <label for="productQuantity" class="form-label">Total Items</label>
            <input type="number" class="form-control" id="productQuantity" name="products" v-model="order.total_items">
          </div>
          <div class="mb-3">
            <label for="productAmount" class="form-label">Price</label>
            <input type="number" class="form-control" id="productAmount" name="productAmount" v-model="order.total_price">
          </div>
          <div class="mb-3">
            <label for="productCategory" class="form-label">Date</label>
            <input type="date" class="form-control" id="productCategory" name="productCategory" v-model="order.date">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="updateOrder(order.tra_id)">Update</button>
      </div>
    </div>
  </div>
</div>
<button id="editOrderBtn" class="edit" data-bs-toggle="modal" data-bs-target="#editProduct"><i class="fa-duotone fa-solid fa-pen"></i></button>
      <button class="delete" @click="deleteOrder(order.tra_id)"><i class="fa-duotone fa-solid fa-trash"></i></button>

          </td>
          
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
    data(){
        return {
            reference:'',
            from_warehouse:'',
            to_warehouse:'',
            total_items:'',
            total_price:'',
            status:'',
            date:''
        }
    },
    methods:{
        getOrders(){
            this.$store.dispatch('getOrders')
        },
        deleteOrder(tra_id){
            this.$store.dispatch('deleteOrder',tra_id)
            console.log('deleted successfully');
            location.reload()
            
        },
        insertOrder(){
            this.$store.dispatch('insertOrder',this.$data)
            location.reload()
        },
        updateOrder(tra_id){
            this.$store.dispatch('updateOrder',tra_id, this.$data)
        }
    },
    mounted(){
        this.getOrders()
        // this.addOrder()
    }
}
</script>
<style scoped>
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

.filter,.pdf {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter {
  background-color: #f0f0f0;
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

th,td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}


#order{
    margin-top: 50px;
}
.edit{
  padding: 5px 10px;
  /* border: none; */
  cursor: pointer;
  margin-right: 5px;
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
/* @media screen and (max-width:320px) {

    table th,td{
        width: 20px;
    }    
} */
</style>