<template> 
  <h1 class="mt-20">Usuario autenticado</h1>

<NuxtPage />
  
 
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })
 

  const user = useSupabaseUser()
  const client = useSupabaseClient()
 
</script>