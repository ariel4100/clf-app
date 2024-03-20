
<script setup>
  // definePageMeta({
  //   layout: false, 
  //   middleware: ['auth']
  // })
  useHead({
    title: 'Saludos',
    meta: [
      {
        name: 'title',
        content: 'Saludos'
      },
      {
        name: 'description',
        content: 'Cuando los líderes cristianos se unen para enfocarse únicamente en la Biblia, dejando de lado tanto la denominación como la doctrina, entonces Dios obrará de maneras inimaginables y el mundo entero será renovado por la Palabra de Dios.'
      }, 
    ] 
  }) 

</script>
<template> 
  <section class="background-radial-gradient mb-20 text-center lg:text-left">
    <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://clflatam.org/wp-content/uploads/2021/02/Fondo-de-Saludos.jpg')] h-[500px]">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div class="flex h-full items-center justify-center">
          <div class="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
            <h2 class="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              SALUDOS 
            </h2>
            <!-- <p class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima officia consequatur adipisci tenetur repudiandae rerum
              quos.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container  mx-auto mb-20 ">   
    <section class="text-gray-600 body-font">
      <div class="grid md:grid-cols-2 lg:gap-20 gap-10 px-5 "> 
        <div class="">
          <img src="https://clflatam.org/wp-content/uploads/2022/12/Fotos-de-Perfil-del-CLF_1-1382x1536.jpg" class="w-full rounded-md shadow-xl" alt=""> 
        </div>
        <div class="">
          <h2 class="title-font text-primary font-medium mb-2">
            PRESIDENTE MUNDIAL
          </h2>
          <h1 class="title-font sm:text-4xl text-3xl mb-5 font-bold text-gray-900">
            PASTOR YEONG KOOK PARK
          </h1>
          <p class="mb-8 leading-relaxed">

            Para mi es un honor saludarles: <br> <br>

            América comenzó con el Evangelio. Los puritanos construían la Iglesia antes de construir sus propias casas, y las escuelas que establecieron educaron a sus hijos sobre cómo servir a Dios. A partir de finales del siglo XVIII, Estados Unidos de América, envió misioneros por todo el mundo para predicar el nombre de Jesucristo. <br> <br> 

            Ahora, sin embargo, la doctrina y la denominación dividen al cristianismo moderno a nivel mundial. Los creyentes prefieren recibir bendiciones para mejorar la calidad de sus propias vidas en lugar de sacrificarse por Dios o por los demás. Nuestras escuelas han prohibido hablar de Dios. Además, nuestros jóvenes dejan de asistir a la iglesia después de graduarse de la escuela secundaria y sufren debido a problemas como el abuso de las drogas y el suicidio. <br>  <br>

            Ahora es el momento de cambiar el liderazgo del cristianismo. Cuando los líderes cristianos se unen para enfocarse únicamente en la Biblia, dejando de lado tanto la denominación como la doctrina, entonces Dios obrará de maneras inimaginables y el mundo entero será renovado por la Palabra de Dios.
          </p>
        
        </div>
      </div>
    </section>
  </div>
</template>