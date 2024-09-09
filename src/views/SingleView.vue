<template>
    <div id="pro">
        <img :src="product?.prod_url">
        <!-- {{ product.prod_description }} --> 
          <h4>{{ product?.prod_description }}</h4>
    </div>
</template>
<script>
export default {
    methods:{
        getProduct(){
            this.$store.dispatch('getProduct',this.$route.params.id)
        }
    },
    computed:{
        product(){
            return this.$store.state.product
        }
    },
    mounted(){
        this.getProduct()
    } 
}
</script>
<style>
    
</style>