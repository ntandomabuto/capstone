<template>
  <div class="about-page">
    <h1>Inventory Management System</h1>
    <p class="subtitle">Track and manage your inventory with ease</p>
    <div class="description">
      <p>Welcome to our inventory management system! This system is designed to help you track and manage your inventory efficiently. With our system, you can easily add, remove, and update inventory items, as well as view detailed reports and analytics.</p>
    </div>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Easy Inventory Tracking: Add, remove, and update inventory items with ease</li>
        </ul>
    </div>
    
    <div class="testimonials">
      <h2>Testimonials</h2>
      <blockquote>
        <p>"This inventory management system has been a game-changer for our business. We've been able to reduce errors and improve efficiency, and the reporting features are incredibly useful."</p>
        <cite>John Doe, CEO of XYZ Corporation</cite>
      </blockquote>
      <blockquote>
        <p>"I was skeptical at first, but this system is really easy to use and has saved us so much time. The customer support is also top-notch."</p>
        <cite>Jane Smith, Inventory Manager at ABC Inc.</cite>
      </blockquote>
    </div>
    <div class="call-to-action">
      <button @click="getStarted">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getStarted() {
      // Redirect to the inventory management system or trigger a modal to sign up
    }
  }
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
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
  background-color: #3e8e41;
}
</style>