<template> 
  <h1 class="mt-20">Videos</h1>

  <pre>
  {{ user }}
  </pre>
  <v-btn 
    color="success" 
    style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"
    @click="logout()"
  >
    Salir 
    <v-icon icon="mdi-chevron-right" end></v-icon>
  </v-btn> 

  <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })

  useHead({
    title: 'Cursos de lideres cristianos',
    meta: [
      {
        name: 'description',
        content: 'Login to your account'
      }
    ] 
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