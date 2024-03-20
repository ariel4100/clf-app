<script setup>
  definePageMeta({
    layout: false, 
    middleware: ['auth']
  })
  useHead({
    title: 'Ingresar a tu cuenta',
    meta: [
      {
        name: 'title',
        content: 'Ingresar a tu cuenta'
      },
      {
        name: 'description',
        content: 'Ingresar a tu cuenta en CLF Argentina - La Fraternidad de Lideres Cristianos'
      }, 
    ] 
  }) 

  const client = useSupabaseClient()
  const email = ref('')
  const visible = ref(false)
  const password = ref('')
  const loading = ref(false) 
 
const login = async () => {
  loading.value = true

  const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
  })
  loading.value = false 

  if (error) {
    alert('Las credenciales son incorrectas')
    // alert(error.message)
  } else {
    await navigateTo('/auth/videos')
  } 
}

</script>
<template> 
 <section class="gradient-form h-full bg-neutral-200  ">
  <div class="container h-full p-10 mx-auto">
    <div
      class="flex h-full lg:w-3/5 flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 mx-auto">
      <div class="w-full">
        <div
          class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class=" ">
            <!-- Left column container-->
            <div class="px-4 md:px-0 ">
              <div class="p-5 md:mx-6 md:p-12">
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
                    Iniciar Sesion
                  </h4>
                </div>

                <form>
                  <p class="mb-4">Accede a tu cuenta</p> 
                  <v-text-field
                    v-model="email"
                    density="compact"
                    type="email"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                  ></v-text-field>

                  <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Contraseña
 
                  </div>

                  <v-text-field
                    v-model="password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
                  ></v-text-field>

                  <!--Submit button-->
                  <div class="mb-12 pb-1 pt-1 text-center">
                    <!-- <button
                      @click="login()"
                      class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="button" 
                      style="
                        background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                      ">
                      Ingresar
                    </button> -->
                    <v-btn  
                      :loading="loading" 
                      size="large"
                      rounded 
                      :color="'primary'" 
                      class="inline-block w-full"
                      @click="login()"
                    >
                      Ingresar 
                      <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>  
                    <!--Forgot password link-->
                    <!-- <a href="#!">Olvidaste la contraseña?</a> -->
                  </div>

                  <!--Register button-->
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 me-2">No tienes una cuenta?</p>
                    <NuxtLink
                      to="/register"
                      class="hover:underline hover:text-primary">
                      Registrarse
                    </NuxtLink>
                  </div>
                </form>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>