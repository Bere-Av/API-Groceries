const express = require('express')
const app = express()
const port = 3001

function decimalaOctal(decimalNumero) {
  let octalNumero = 0, contador = 0;
  while(decimalNumero > 0) {
    octalNumero += (decimalNumero % 8) * Math.pow(10, contador);
    decimalNumero = Math.floor(decimalNumero / 8);
    contador++;
  }
  return octalNumero;
}

app.get('/decimal/:id', (request, response) => {
  let num = parseInt(request.params.id)
  let octal = decimalaOctal(num);
  response.json({
    result: octal
  });
})

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`)
})


