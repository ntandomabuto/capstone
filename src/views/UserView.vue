<template>
     <!-- <div class="user-card">
    <img :src="" class="user-image" alt="Profile Picture">
    <div class="user-info">
      <h2>{{  }}</h2>
      <p>{{  }}</p>
    </div>
  </div> -->
  <h1>Login</h1>

    <div class="log">
        <h3>Login to add or remove products</h3>
        <div class="email">
            <label for="email">Email Address:</label>
            <input type="email" v-model="email_add" placeholder="email@example.com"><br>

        </div>
        <div class="pass">
            <label for="password">Password:</label>
            <input type="password" v-model="user_pass" placeholder="enter password"><br>

        </div>
        <button @click="loginUser()" class="btn btn-secondary" type="submit">Login</button>
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
        // getUser(user_id){
        //     this.$store.dipatch('getUser',user_id)
        // }
    }
}
</script>
<style scoped>
h1{
    margin: 20px;
}
    .log{
        margin: 160px;
        /* display: grid; */
    }
    .email{
        width: 200px;
        display: grid;
        /* justify-content: center; */
        margin:auto;
        /* margin-left: 450px; */
    }
    .pass{
        width: 200px;
        display: grid;
        /* justify-content: center; */
        margin:auto;
        /* margin-left: 210px; */
    }
</style>