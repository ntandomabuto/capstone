<template>
    <div v-if="isLoggedIn">
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <th>User url</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in $store.state.user" :key="user.user_id">
                    <td>{{ user.user_id }}</td>

                </tr>
            </tbody>
        </table>


    </div>
    <div v-else>
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
    </div>
</template>
<script>
export default {
    data(){
        return{
            email_add:'',
            user_pass:'',
            isLoggedIn: false
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch('loginUser',{email_add:this.email_add,user_pass:this.user_pass})
            .then(() => {
          this.isLoggedIn = true
          this.getUsers()
        })
        },
        getUsers(){
            this.$store.dispatch('getUsers')
        }
    },
    mounted(){
        this.getUsers()
    }
}
</script>
<style scoped>
h1{
    margin: 10px;
}
    .log{
        margin: 150px auto;
        /* display: grid; */
        width: 350px;
        box-shadow: 1px 1px 1px 1px black;
        border-radius: 5rex;
    }
    .email{
        width: 250px;
        display: grid;
        /* justify-content: center; */
        margin:auto;
        /* margin-left: 450px; */
    }
    .pass{
        width: 250px;
        display: grid;
        /* justify-content: center; */
        margin:auto;
        /* margin-left: 210px; */
    }
    .btn{
        transition: transform 1s linear;
    }
    .btn:hover{
        background-color: rgb(157, 202, 202);
    }
    h1,h3{
        text-shadow: 1px 1px 0 black;
    }
</style>