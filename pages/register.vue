<script setup>
  definePageMeta({
    layout: false, 
    middleware: ['auth']
  })
  useHead({
    title: 'Registrarse CLF',
    meta: [
      {
        name: 'description',
        content: 'Registrarse en CLF'
      }
    ] 
  })

  const client = useSupabaseClient()
  const form = ref({
      name: null,
      surname: null,
      email: null,
      password: null,
      // terms: false,
    }) 

    const loading = ref(false) 
    
    const globalRules = {
  required: (value) => !!value || 'Este campo es requerido',
  minLength: (value) => (value && value.length >= 6) || 'Debe tener al menos 6 caracteres',
  // Agrega más reglas globales según sea necesario
};

  const sign_up = async (event) => { 
    loading.value = true

    const res = await event

    if (!res.valid) {
      alert(JSON.stringify(res.errors, null, 2))
      loading.value = false 
      return false
    }
   
    const { error } = await client.auth.signUp(form.value)
    if (error) {
      alert(error.message)
      loading.value = false
    } else {
      await navigateTo('/auth')
      loading.value = false
    } 
  }
  
</script>
<template>
 
  <section class="gradient-form h-full bg-neutral-100 dark:bg-neutral-700"> 
     <div class="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
   
        <div class="grid md:grid-cols-2 h-full w-full"> 
          <div class="grid items-center px-4 md:px-0 ">
            <div class="md:mx-6  lg:p-12 p-5">
              <!--Logo-->
              <div class="text-center">
                <v-img
                  :height="80"
                  :width="200"
                  aspect-ratio="16/9"
                  contain
                  class="mx-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/clfargentina.appspot.com/o/logos%2FCLF%20Nuevo%20Logo.png?alt=media&token=071e7f69-dbc0-4a50-b3e0-5cd61d9eec0f"
                ></v-img> 
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                  Registrate
                </h4>
              </div>

              <v-form @submit.prevent="sign_up">
                <p class="mb-4">Crea tu nueva cuenta</p>
            
                <div>
                <v-text-field
                  v-model="form.name"
                  color="primary"
                  label="Nombre"
                  variant="underlined"
                 :rules="[globalRules.required, globalRules.minLength]"
                ></v-text-field> 

                <v-text-field
                  v-model="form.surname"
                  color="primary"
                  label="Apellido"
                  variant="underlined"
                 :rules="[globalRules.required, globalRules.minLength]"
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  color="primary"
                  type="email"
                  label="Correo Electronico"
                  variant="underlined"
                 :rules="[globalRules.required, globalRules.minLength]"
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  color="primary"
                  type="password"
                  label="Contraseña"
                  placeholder="Escribe una contraseña"
                  variant="underlined"
                 :rules="[globalRules.required, globalRules.minLength]"
                ></v-text-field>
          
              </div>
 
                <div class="mb-12 pb-1 pt-1 text-center">   
                  <v-btn  
                    :loading="loading"
                    type="submit"
                    size="large"
                    rounded 
                    :color="'primary'" 
                    class=""
                    @click="sign_up()"
                  >
                    Registrarse 
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                  </v-btn>  
                
                </div> 
              </v-form>
            </div>
          </div>

          <div class="md:flex items-center hidden rounded-b-lg  lg:rounded-e-lg lg:rounded-bl-none relative bg-right" style="background-image: url('https://static.wixstatic.com/media/bd3a1b_9868db9afbb04106ad7f8e45ef0bc0b4~mv2.jpg/v1/fill/w_1903,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd3a1b_9868db9afbb04106ad7f8e45ef0bc0b4~mv2.jpg'); background-size: cover;">
            <div class="absolute inset-0 bg-black opacity-70"></div>
            <div class="px-4 py-6 text-white md:mx-6 md:p-12 relative z-10">
              <h4 class="mb-6 text-3xl font-semibold">
                Únete a nuestra fraternidad de líderes cristianos y forma parte de una comunidad comprometida con el servicio y el crecimiento espiritual.
              </h4>
              <p class="text-lg">
                Aquí encontrarás un espacio para compartir experiencias, recibir apoyo y fortalecer tu fe.
              </p>
            </div>
          </div>
        </div>
      
     </div> 
 </section>
 
 </template>