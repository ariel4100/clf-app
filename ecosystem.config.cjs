module.exports = {
  apps: [
    {
      name: 'clfapp', // Cambia 'NuxtAppName' por el nombre de tu aplicación
      port: '3001', // Puerto en el que tu aplicación Nuxt estará escuchando
      exec_mode: 'cluster', // Modo de ejecución: cluster para aprovechar múltiples núcleos del procesador
      instances: 'max', // Número de instancias a crear, 'max' para utilizar todos los núcleos disponibles
      script: './.output/server/index.mjs' // Ruta al script principal de tu aplicación Nuxt
    }
  ]
}
