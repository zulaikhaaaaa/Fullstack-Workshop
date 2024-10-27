<script setup lang="js">

import { ref, watchEffect, onMounted } from 'vue';

// Array of image URLs
const images = [
  '/src/views/beluga.jpg',
  '/src/views/nimo.jpg',
  '/src/views/oyen.jpg',
];

// Reactive index to track the current image
const currentIndex = ref(0);

// Function to go to the next image
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}

// Function to go to the previous image
function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}

// Function to "like" the current image
function likeImage() {
  alert(`You guys are matching!!`);
}

// Auto-slide effect
// onMounted(() => {
//   setInterval(() => {
//     nextImage();
//   }, 3000); // Change slide every 3 seconds
// });
</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-pink-50 to-rose-100">

    <div class="flex">
      <!-- chat sidebar -->
      <aside class="w-80 h-screen bg-white shadow-lg">
        <!-- profile header -->
        <div class="bg-gradient-to-r from-rose-500 to-pink-500 p-4">
          <div class="flex items-center space-x-3">
            <img 
              src="/src/views/pfp.jpg" 
              alt="Profile Picture" 
              class="w-12 h-12 rounded-full border-2 border-white shadow-md"
            >
            <h2 class="text-white font-semibold text-lg">My Profile</h2>
          </div>
        </div>

        <!-- search bar -->
        <div class="p-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search matches..."
              class="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200 transition-colors"
            />
          </div>
        </div>

        <!-- discover section -->
        <div class="p-4">
          <div class="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-4">
            <div class="flex items-center space-x-4">
              <img 
                src="/src/views/card.png" 
                alt="Discover" 
                class="w-16 h-16 rounded-full border-2 border-white shadow-md"
              >
              <div>
                <h2 class="font-semibold text-gray-800 mb-1">Discover New Matches</h2>
                <p class="text-sm text-rose-600">35.6k kitties ready to connect</p>
              </div>
            </div>
          </div>
        </div>

        <!-- matches section -->
        <div class="px-4 py-2">
          <h3 class="text-rose-600 font-bold text-sm uppercase tracking-wide mb-3">Matched</h3>
          
          <!-- chat list -->
          <div class="space-y-3">
            <!-- Atan -->
            <div class="flex items-center space-x-3 p-3 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer">
              <img 
                src="/src/views/atan.jpg" 
                alt="Atan" 
                class="w-12 h-12 rounded-full border border-rose-200"
              >
              <div>
                <p class="font-semibold text-gray-800">Atan Anje</p>
                <p class="text-sm text-gray-600">Ayang dah sampai rumah ke</p>
              </div>
            </div>

            <!-- Snowy -->
            <div class="flex items-center space-x-3 p-3 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer">
              <img 
                src="/src/views/snowy.jpg" 
                alt="Snowy" 
                class="w-12 h-12 rounded-full border border-rose-200"
              >
              <div>
                <p class="font-semibold text-gray-800">Snowy</p>
                <p class="text-sm text-gray-600">hati2 dengan atan tu..dia playboy</p>
              </div>
            </div>

            <!-- Hilman -->
            <div class="flex items-center space-x-3 p-3 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer">
              <img 
                src="/src/views/Hilman.jpg" 
                alt="Hilman" 
                class="w-12 h-12 rounded-full border border-rose-200"
              >
              <div>
                <p class="font-semibold text-gray-800">Hilman</p>
                <p class="text-sm text-gray-600">Rindu..sleepcall 2night?</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    
    <div class="flex flex-col w-full ">
      <div class="flex justify-center w-full "><img src="/src/views/logo.png" alt="" sizes="9px" class="h-[12rem] w-[12rem]"></div>
      <div class="flex flex-col items-center w-full space-y-4">
        <!-- Display current image with a smooth transition effect -->
        <div class="relative h-[300px] w-[500px] overflow-hidden bg-red-900 rounded-lg shadow-lg">
          <img
            :src="images[currentIndex]"
            alt="Slider Image"
            class="h-full w-full transition-opacity duration-500 object-contain"
          />
        </div>
        <!-- Slider navigation buttons -->
        <div class="flex space-x-4">
          <button @click="prevImage" class="bg-rose-400 text-white px-4 py-2 rounded-full hover:bg-rose-500 text-xl"> < </button>
          <button @click="likeImage" class="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500">
          Like
        </button>
          <button @click="nextImage" class="bg-rose-400 text-white px-4 py-2 rounded-full hover:bg-rose-500 text-xl"> > </button>
        </div>
      </div>
    </div>

  </div>
</template>