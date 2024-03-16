<template> 
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>

  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <iframe class="w-full aspect-video ..." src="https://www.youtube.com/embed/WGgExlJXmhc?si=Lt33DCA7DK1qI3sl"></iframe>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start  items-center t-center md:text-left ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Fraternidad de Lideres Cristianos
      </h1>
      <p class="mb-8 leading-relaxed ">
        CLF (siglas en ingles CHRISTIAN LEADERS FELLOWSHIP) es una iniciativa de liderazgo global que se esfuerza por unir a los líderes cristianos a través de la teología basada en la Biblia, implementar soluciones prácticas para el ministerio y fomentar el compañerismo arraigado en el evangelio.
      </p>
      <div class="flex justify-center">
        <NuxtLink to="/about" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Saber mas</NuxtLink>
        <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
      </div>
    </div>
  </div>
</section>

  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class=" px-6 lg:px-8">
    <div class="mx-auto max-w-4xl lg:mx-0 text-center">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">El CLF la Formula Para un Gran Despertar</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Cuando las organizaciones cristianas se
        conectan y descubren vías de colaboración,
        la evangelización se fortalece tanto a nivel local como a nivel  global.
      </p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <!-- <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div> -->
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 text-center">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Iglesias conectadas</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">1500</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Eventos por año</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Personas evangelizadas</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">2.000.000+</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Oraciones al año</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">50.000</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Programas</h1>
        <div class="leading-relaxed">
          En la Fraternidad de Lideres Cristianos (CLF),
          tienes tantas oportunidades durante todo el año para aprender cómo construir tu teología e involucrar a tu congregación, jóvenes y mayores.
        </div>
        <div class="mt-8">
          <NuxtLink to="/about" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Saber mas</NuxtLink>
          <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
        </div>
      </div>
      <!-- <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div> -->
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://static.wixstatic.com/media/a37883_a13ef27e89ce490e9ba0c2c634b55688~mv2.png/v1/fill/w_444,h_291,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/worship.png" alt="stats">
    </div>
  </div>
</section>
<section class=" ">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 text-center">CLF por el mundo </h1> 
  <img class="w-full  " src="https://clflatam.org/wp-content/uploads/2024/01/Mapa-de-CLF240124_END-1536x867.jpg" alt="CLF por el mundo">
</section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://static.wixstatic.com/media/a37883_94da4615e3664d2cb07de21c52c0a1ab~mv2.jpg/v1/fill/w_1997,h_929,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a37883_94da4615e3664d2cb07de21c52c0a1ab~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/125365_5c3ba44f98654409a91e9eff983126a1f000.jpg/v1/fill/w_1280,h_632,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/125365_5c3ba44f98654409a91e9eff983126a1f000.jpg',
          },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          // },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          // },
        ],
      }
    },
  }
</script>