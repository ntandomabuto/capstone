<template>
    <div id="pro" v-for="product in $store.state.product" :key="product.prod_id">
        <img :src="product.prod_url">
        {{ product.prod_description }}
    </div>
</template>
<script>
export default {
    methods:{
        getProduct(prod_id){
            this.$store.dispatch('getProduct',prod_id)
        }
    },
    mounted(){
        this.getProduct(prod_id)
    } 
}
</script>
<style>
    
</style>