<template>  
<section class="container  mx-auto  px-6">
  <div class="mt-32 mb-10">
    <h1 class=" text-2xl font-semibold">Bienvenido!, {{ user?.email }}</h1>
    <p class="leading-relaxed my-3">
      Aquí encontrarás los mejores videos de la Fraternidad de Lideres Cristianos (CLF), para que puedas aprender sobre la palabra de Dios.
    </p>
  </div>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-10">
      <div class="flex mb-5" v-for="item in 4">  
        <iframe class="w-full aspect-video ..." src="https://www.youtube-nocookie.com/embed/6arpM8aWvdo?si=P65I8jAmbYbfK3Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> 
    </div>
  </section>
 
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })

  useHead({
    title: 'Videos de CLF', 
  }) 

  const user = useSupabaseUser()
  const client = useSupabaseClient()

  const logout = async () => {
      const { error } = await client.auth.signOut()
      if (error) {
      alert(error.message)
    } else {
      await navigateTo('/login')
    } 
  }
</script>