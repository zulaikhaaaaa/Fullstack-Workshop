<script setup>
  // import {onMounted, ref} from 'vue';
  // import PocketBase from 'pocketbase';

  // const pb = new PocketBase('http://127.0.0.1:8090');
  // const Titleval = ref("");
  // const data =ref([]);

  // async function submit() {
 
  //     const record = {
  //       "Title": Titleval.value,
  //       "Description": "test"
  //     };
  //   const lala = await pb.collection('Homes').create(record);
  //   console.log(lala)
  //   data.value.push(record); //push data to array
  // }
  // onMounted(async()=>{
  //   const result = await pb.collection("Homes").getFullList();
  //   console.log(result);
  //   data.value = result;
  // })

</script>

<template>

    <nav class="gap-5  bg-gradient-to-br from-pink-50 to-rose-100">
      <router-link to="/" class="ml-5 text-red-900 hover:text-red-200">Home</router-link>
      <router-link to="/SignIn" class="ml-4 text-red-900 hover:text-red-200">Sign Up</router-link>
    </nav>
    <router-view></router-view>
</template>