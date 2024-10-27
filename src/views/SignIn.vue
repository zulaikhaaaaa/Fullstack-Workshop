<script setup>
import {ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';

// Initialize PocketBase instance
const pb = new PocketBase('http://127.0.0.1:8090');

// Reactive variables for user sign-in form
const emailVal = ref("");
const passwordVal = ref("");
const data = ref([]); // Define data as a reactive variable
const record = ref({}); // Define record as a reactive variable

// Sign-in function
async function signIn() {

  const newRecord = {
      email: emailVal.value,
      password: passwordVal.value,
    };

    await pb.collection('try').create(newRecord);
    data.value.push(newRecord);
    console.log(data)
 
}

onMounted (async() => {
  const result = await pb.collection('try');
  data.value = result;
  console.log(result)
})

</script>

<template>
  <div class="bg-red-100 h-screen ">
    <div>
      <img class="logo" src="/src/views/logo_chingder.png" alt="Chingder Logo" />
    </div>
    <div class="sign-in-form">
      <!-- Email input -->
      <input
        v-model="emailVal"
        type="email"
        placeholder="Email"
        class="bg-orange-100 rounded-lg p-2 my-2 w-full"
      />
      <!-- Password input -->
      <input
        v-model="passwordVal"
        type="password"
        placeholder="Password"
        class="bg-orange-100 rounded-lg p-2 my-2 w-full"
      />
      <!-- Sign-in button -->
      <button
        @click="signIn"
        class="bg-red-400 text-white px-4 py-2 rounded-lg mt-2 w-full hover:bg-red-700"
      >
        Sign In
      </button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin: auto;
}
.sign-in-form {
  padding: 10px;
  max-width: 400px;
  margin: auto;
}
</style>