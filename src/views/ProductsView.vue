<template>
    <div>
        <h1>Products List</h1>
       <div class="container">
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
                    <td><a href="/single"><i class="fa-duotone fa-solid fa-eye"></i></a></td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        getProducts(){
            this.$store.dispatch('getProducts')
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>
<style scoped>
    /* body{
        height: 200vh;
    } */
</style>