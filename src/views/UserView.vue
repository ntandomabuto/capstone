<template>
    <div class="log">
        <h1>Login</h1>
        <label for="email">Email Address</label>
        <input type="email" v-model="email_add"><br>
        <label for="password">Password</label>
        <input type="password" v-model="user_pass"><br>
        <button @click="loginUser()">Login</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email_add:'',
            user_pass:''
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch('loginUser',{email_add:this.email_add,user_pass:this.user_pass})
            
        }
    }
}
</script>
<style scoped>
    
</style>