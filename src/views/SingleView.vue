<template>
    <div id="pro" v-for="product in $store.state.product" :key="product.prod_id">
        <img :src="product.prod_url">
        {{ product.prod_description }}
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
<style>
    
</style>