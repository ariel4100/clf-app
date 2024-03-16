<template> 
  <v-app-bar> 
      <NuxtLink to="/" class="m-3"> 
        <v-img
        :height="50"
        :width="200"
        aspect-ratio="16/9"
        contain
        src="https://firebasestorage.googleapis.com/v0/b/clfargentina.appspot.com/o/logos%2FCLF%20Nuevo%20Logo.png?alt=media&token=071e7f69-dbc0-4a50-b3e0-5cd61d9eec0f"
      ></v-img>
    </NuxtLink> 
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
 
    <div class="d-none d-sm-flex h-full">
      <v-btn
        flat 
        v-for="item in menuItems"
        :key="item.title" 
        class="h-auto"
        @click="handleItemClick(item)" 
        > 
        {{ item.title }} 

        <v-menu v-if="item.submenu.length > 0" activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in item.submenu"
              :key="index"
              :value="index"
              @click="handleItemClick(item)" 
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    
      <!-- <NuxtLink to="/about" class="m-3">NOSOTROS</NuxtLink>
      <NuxtLink to="/auth" class="m-3">VIDEOS</NuxtLink>
      <NuxtLink to="/contact" class="m-3">CONTACTO</NuxtLink>
      <NuxtLink to="/login" class="m-3 rounded-full bg-yellow-300 p-3">INGRESAR</NuxtLink>
      <NuxtLink to="/register" class="m-3">REGISTRARSE</NuxtLink> -->
    </div>
  </v-app-bar> 
 
  <v-navigation-drawer
        v-model="drawer"
        temporary
      > 
    <v-divider></v-divider>

    <v-list density="compact" nav>
      
      <v-list-item v-for="item in menuItems" :title="item.title" :value="item.title" :to="item.path"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script setup>
import { ref } from 'vue'
const user = useSupabaseUser()
const drawer = ref(false)
console.log(user.value)
const submenuAbout = [
    { title: 'Misión', path: '/about', icon: 'home', id: 'menu-activador2' },
    { title: 'Saludos', path: '/saludos', icon: 'home', id: 'menu-activador' },
    { title: 'Fundador', path: '/fundador', icon: 'face', id: 'menu-activador2' }, 
]
var menuItems = []
if(user.value == null){
  menuItems = [
      { title: 'INICIO', path: '/', icon: 'home', id: 'menu-activador2', submenu: [] },
      { title: 'NOSOTROS', path: '/about', icon: 'home', id: 'menu-activador', submenu: submenuAbout }, 
      { title: 'CONTACTO', path: '/contact', icon: 'lock_open', id: 'menu-activador2', submenu: [] },
      { title: 'INGRESAR', path: '/login', icon: 'lock_open', id: 'menu-activador2', submenu: [],  },
      { title: 'REGISTRARSE', path: '/register', icon: 'lock_open', id: 'menu-activador2', submenu: [],  }
  ]
}else{
  menuItems = [
      { title: 'INICIO', path: '/', icon: 'home', id: 'menu-activador2', submenu: [] },
      { title: 'NOSOTROS', path: '/about', icon: 'home', id: 'menu-activador', submenu: submenuAbout },
      { title: 'VIDEOS', path: '/auth/videos', icon: 'face', id: 'menu-activador2', submenu: [] },
      { title: 'CONTACTO', path: '/contact', icon: 'lock_open', id: 'menu-activador2', submenu: [] }, 
      // { title: 'CONTACTO', path: '/contact', icon: 'lock_open', id: 'menu-activador2', submenu: [] }, 
  ]
}

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: 'ChartPieIcon' },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: 'CursorArrowRaysIcon' },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: 'FingerPrintIcon' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: 'SquaresPlusIcon' },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: 'ArrowPathIcon' },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: 'PlayCircleIcon' },
  { name: 'Contact sales', href: '#', icon: 'PhoneIcon' },
]

async function handleItemClick(item) {
    if (item.submenu?.length > 0) { 
    }else{
      await navigateTo(item.path);
    }
  }
const mobileMenuOpen = ref(false)
</script>