<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-1/4 bg-red-600	 p-4">
        <!-- Profile and Settings -->
        <div class="flex items-center justify-between mb-4">
          <div class="font-bold">My Profile</div>
          <button class="text-xl text-gray-600">
            <i class="fas fa-cog"></i>
          </button>
        </div>
        
        <!-- Search Bar -->
        <div class="mb-4">
          <input
            type="text"
            placeholder="Search"
            class="w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        
        <!-- Discover New Matches -->
        <div class="p-2 bg-white rounded-md mb-4">
          <p class="font-semibold">Discover New Matches</p>
          <p class="text-sm text-gray-500">Start swiping to connect with new people!</p>
        </div>
        
        <!-- Matched List -->
        <div class="flex flex-col space-y-2">
          <div v-for="user in matches" :key="user.name" class="flex items-center space-x-2">
            <img
              :src="user.image"
              alt="profile picture"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-medium">{{ user.name }}</p>
              <p class="text-xs text-gray-500">Hello Just checking in...</p>
            </div>
          </div>
        </div>
  
        <!-- Logout Button -->
        <button class="mt-6 w-full text-left text-red-500 font-semibold">LOGOUT</button>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 flex flex-col items-center justify-center bg-white">
        <!-- Profile Card -->
        <div class="bg-white rounded-lg shadow-lg p-6 w-80">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            class="w-full h-64 object-cover rounded-md"
          />
          <h2 class="mt-4 text-center text-xl font-semibold">Natasha Dominic, 19</h2>
          
          <!-- Action Buttons -->
          <div class="flex justify-around mt-6">
            <button class="text-2xl text-gray-400 hover:text-red-400 bg-amber-300">ygyi
              <i class="fas fa-times-circle"></i>
            </button>
            <button class="text-2xl text-gray-400 hover:text-blue-400">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        matches: [
          { name: "Lucy Chen", image: "https://via.placeholder.com/50" },
          { name: "Amy Justice", image: "https://via.placeholder.com/50" },
          { name: "Danielle Packard", image: "https://via.placeholder.com/50" },
          { name: "Jane Matt", image: "https://via.placeholder.com/50" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  