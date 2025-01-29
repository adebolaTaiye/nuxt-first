<template>
    <div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 ">
            <div class="p-4">
            <img :src="props.product.image" class="mx-auto my-4"/>
            </div>
            <div class="p-7">
            <h2 class="text-4xl my-4">{{ props.product.title }}</h2>
            <p class="text-xl my-4">Price - ${{ props.product.price }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Product description</h3>
            <p class="mb-7">{{ props.product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: {
    image: string;
    title: string;
    price: number;
    description: string;
  };
}>();

</script>

<style scoped>
    img {
        max-width:390px
    }

</style>