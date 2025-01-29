<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full flex flex-col"
  >
    <NuxtLink :to="`/products/${props.product.id}`" class="flex justify-center">
      <img class="rounded-t-lg h-40 object-cover" :src="props.product.image" alt="" />
    </NuxtLink>
    <div class="p-5 flex-grow flex flex-col justify-between">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.title }}</p>
      <NuxtLink :to="`/products/${props.product.id}`">
        <p
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View details
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: {
    image: string;
    title: string;
    id: number;
  };
}>();
</script>

<style scoped>
.h-40 {
  height: 10rem;
}

/* Responsive card height */
@media (min-width: 640px) {
  .card {
    height: 20rem;
  }
}

@media (min-width: 768px) {
  .card {
    height: 25rem;
  }
}

@media (min-width: 1024px) {
  .card {
    height: 30rem;
  }
}
</style>
