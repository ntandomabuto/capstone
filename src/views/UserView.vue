<template>
    <div v-if="$cookies.get('token')" class="users">
        <button @click="removeToken()" class="btn btn-secondary">Logout</button>
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
            <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >Edit User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="editUserForm">
          <div class="mb-3">
            <label for="firstname" class="form-label">Firstname</label>
            <input type="text" class="form-control" v-model="user.firstname">
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Lastname</label>
            <input type="text" class="form-control" v-model="user.lastname">
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="number" class="form-control"  v-model="user.age">
          </div>
       
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <input type="text" class="form-control" v-model="user.gender">
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Drag your image here</label>
            <input type="file" class="form-control">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="updateUser(user.user_id)">Update</button>
      </div>
    </div>
  </div>
</div>
<button id="editOrderBtn" class="edit" data-bs-toggle="modal" data-bs-target="#editProduct"><i class="fa-duotone fa-solid fa-pen"></i></button>

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
        },
        updateUser(user_id){
            this.$store.dispatch('updateUser',user_id, this.$data)
        },
        removeToken(){
        this.$cookies.remove('token');
        location.reload()
    },
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