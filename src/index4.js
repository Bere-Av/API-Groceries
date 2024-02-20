// Importa el módulo Express.js
const express = require('express')

// Crea una nueva aplicación Express
const app = express()

// Define el puerto en el que se ejecutará la aplicación
const port = 3000

// Define una ruta GET para la URL raíz ("/") de la aplicación
// Cuando se accede a esta ruta, se envía la respuesta 'Hello World!'
/* app.get('/', (request, response) => {
  response.send('Hello World!')
}) */
app.get('/getClients/:id', (request, response) => {
  /* response.send('¡Hola Mundo!') */
  /* Procesa la peticón 
  Enviar una respuesta*/
/*   console.log(request.params.id) */
  let num = parseInt(request.params.id)
  response.json({
    /* status:"Petición por GET recibida" */
    result: (num*num)
  });
})

// Inicia el servidor para escuchar las solicitudes entrantes
// Imprime un mensaje en la consola una vez que el servidor está listo
app.listen(port, () => {
  console.log(`Server listening on the port ${port}`)
})

