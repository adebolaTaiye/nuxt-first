<template>
    <div class="p-10">
        <h2 class="text-3xl font-bold">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic architecto alias cumque repudiandae? Nesciunt provident vel minima cumque quisquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint sunt praesentium consequatur ab aperiam. Esse sit illum perspiciatis blanditiis eius.</p> 
        {{ data }}
    </div>
</template>

<script setup lang="ts">
  const {data}:any = await useFetch('/api/ninja?name=John')
</script>

<style scoped>
 
</style>
  