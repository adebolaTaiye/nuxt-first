<template>
    <div class="p-10">
        <Title>My Shop | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
        <ProductDetails :product ="product"/>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'custom'
 })
 const route = useRoute()
 const uri = `https://fakestoreapi.com/products/${route.params.id}`
  
 const { data: product }:any = await useFetch(uri)

 if (!product.value) {
    throw createError({
    statusCode: 404,
    statusMessage: 'Product Not Found',
    fatal: true
  })
}
 
</script>

<style scoped>

</style>