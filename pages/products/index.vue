<template>
  <div class="p-10">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 ">
      <div v-for="p in products">
       <ProductCard :product ="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const { data: products }:any = await useFetch("https://fakestoreapi.com/products")

useHead({
  title: 'My Shop | Merch',
  meta: [
    { name: 'description', content: 'returns all the products.' }
  ]
})

</script>

<style scoped></style>
