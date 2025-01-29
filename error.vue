<script setup lang="ts">
import type { NuxtError } from '#app'

const props:any = defineProps({
  error: Object as () => NuxtError 
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="mx-auto mt-10 max-sm-auto text-center ">
    <p class="mt-10 text-7xl font-bold">{{ props.error.statusCode }}</p>
    <p class="mt-5">{{ props.error.message }}</p>
    <button @click="handleError" class="mt-7 p-2 border border-rounded">Clear errors</button>
  </div>
</template>
