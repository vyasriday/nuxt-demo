<!-- @ts-nocheck -->
<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">  
        <input type="password" v-model="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  const data = await $fetch('/api/login', {
    method: 'POST',
    body: { email: email.value, password: password.value }
  });
  console.log(data);
}
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}

.form-group input {
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

button[type="submit"] {
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #007bff;
  color: white;
}
</style>