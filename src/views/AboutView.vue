<template>
  <div class="about-page">
    <h1>Inventory Management System</h1>
    <p class="subtitle">Track and manage your inventory.</p>
    <div class="description">
      <p>Welcome to our inventory management system! This system is designed to help you track and manage your inventory efficiently. With our system, you can easily add, remove, and update inventory items, as well as view detailed reports.</p>
    </div>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Easy Inventory Tracking: Add, remove, and update inventory items with ease</li>
        </ul>
    </div>
    
    <div class="testimonials">
      <h2>Testimonial</h2>
      <blockquote>
        <p>"This inventory management system has been a game-changer for our business. We've been able to track our product and improve efficiency."</p>
        <cite>Lisa Lee, Een Tech</cite>
      </blockquote>
    </div>
    <div class="call-to-action">
      <!-- <button><a href="/user">Get Started</a></button> -->
      <div class="admin-container">
        <button id="addUserBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addUser">Get Started</button>
      </div>
      <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addUserLabel">Sign Up</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addUserForm">
                <div class="mb-3">
                  <label for="firstname" class="form-label">Firstname</label>
                  <input type="text" class="form-control" id="firstname" name="firstname" v-model="firstname">
                </div>
                <div class="mb-3">
                  <label for="lastname" class="form-label">Lastname</label>
                  <input type="text" class="form-control" id="latname" name="latname" v-model="lastname">
                </div>
                <div class="mb-3">
                  <label for="age" class="form-label">Age</label>
                  <input type="number" class="form-control" id="Age" name="age" v-model="age">
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <input type="text" class="form-control" id="gender" name="gender" v-model="gender">
                </div>
                <div class="mb-3">
                  <label for="email_add" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="email_add" name="email_add" v-model="email_add">
                </div>
                <div class="mb-3">
                  <label for="user_pass" class="form-label">Create Password</label>
                  <input type="password" class="form-control" id="password" name="password" v-model="user_pass">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" id="saveProduct" @click="registerUser()">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        firstname:'',
        lastname:'',
        age:'',
        gender:'',
        email_add:'',
        user_pass:''
      }
    },
  methods: {
    registerUser(){
      this.$store.dispatch('registerUser',this.$data)
      // location.reload()
    }
  }
}
</script>

<style scoped>
.call-to-action button a{
  text-decoration: none;
  color: #ddd;
}
.about-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  margin-top: 50px;
}

.subtitle {
  font-size: 18px;
  color: #666;
}

.description {
  margin-bottom: 20px;
}

.features {
  margin-bottom: 20px;
}

.features ul, .benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li, .benefits li {
  margin-bottom: 10px;
}
.btn-close{
  color: rgb(148, 200, 200);
}

.testimonials {
  margin-bottom: 20px;
}

.testimonials blockquote {
  margin-bottom: 10px;
  padding: 10px;
  border-left: 4px solid #ccc;
}



.call-to-action {
  text-align: center;
  margin-bottom: 20px;
}

.call-to-action button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.call-to-action button:hover {
  background-color: rgb(148, 200, 200);
}
.modal-content {
  background-color: #e0d9d9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  padding: 20px;
}

.modal-header {
  background-color: rgb(148, 200, 200);
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.modal-header .modal-title {
  font-size: 18px;
  font-weight: bold;
}

.modal-body {
  padding: 20px;
}

.modal-body label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-body input[type="text"], .modal-body input[type="email"], .modal-body input[type="password"], .modal-body input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

.modal-footer {
  /* background-color: #f9f9f9; */
  border-top: 1px solid #ddd;
  padding: 10px;
  text-align: right;
}

.modal-footer button[type="submit"] {
  background-color: rgb(148, 200, 200);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-footer button[type="submit"]:hover {
  background-color: #3e8e41;
}

.modal-footer button[type="button"] {
  background-color: #ccc;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-footer button[type="button"]:hover {
  background-color: #bbb;
}
</style>