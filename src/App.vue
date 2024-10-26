<script setup>
  import {onMounted, ref} from 'vue';
  import PocketBase from 'pocketbase';

  const pb = new PocketBase('http://127.0.0.1:8090');
  const Titleval = ref("");
  const data =ref([]);

  async function submit() {
 
      const record = {
        "Title": Titleval.value,
        "Description": "test"
      };
    const lala = await pb.collection('Homes').create(record);
    console.log(lala)
    data.value.push(record); //push data to array
  }
  onMounted(async()=>{
    const result = await pb.collection("Homes").getFullList();
    console.log(result);
    data.value = result;
  })

</script>

<template>
<input v-model="Titleval"/>
<button class="bg-pink-200 text-white px-5 py-2 rounded-lg my-2" @click="submit">Submit</button>

<ul>
  <li v-for="item in data"> {{ item.Title }}</li>
</ul>
</template>