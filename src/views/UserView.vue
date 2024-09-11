<template>
    <div v-if="$cookies.get('token')" class="users">
        <h1>Users</h1>
        <table>
            <thead>
                <tr>
                    <th>User Profile</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in $store.state.users" :key="user.user_id">
                    <td><img :src="user.user_profile" alt=""></td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.user_role }}</td>
                    <td>
            <button class="edit"><i class="fa-duotone fa-solid fa-pen"></i></button>
      <button class="delete" @click="deleteUser(user.user_id)"><i class="fa-duotone fa-solid fa-trash"></i></button>

          </td>

                </tr>
            </tbody>
        </table>


    </div>
    <div v-else>
  <h1>Login</h1>
    <div class="log">
        <h3>Login to view users table</h3>
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
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch('loginUser',{email_add:this.email_add,user_pass:this.user_pass})
        },
        getUsers(){
            this.$store.dispatch('getUsers')
        },
        deleteUser(user_id){
            this.$store.dispatch('deleteUser',user_id)
            console.log('deleted user successfully');
            location.reload()
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
    width: 350px;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 5px; /* corrected typo */
}
    .email{
        width: 250px;
        display: grid;
        /* justify-content: center; */
        margin:auto;
        /* margin-left: 450px; */
    }
    img{
        width: 80px;
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
    .edit{
  padding: 5px 10px;
  /* border: none; */
  /* cursor: pointer; */
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
    h1,h3{
        text-shadow: 1px 1px 0 black;
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
    .users{
        margin: 20px auto;
    }
</style>