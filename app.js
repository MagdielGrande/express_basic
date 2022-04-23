//usando objeto express
const express = require('express');
//app de Exxpress
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera ala url localahost:3000
app.get('/', (req, res) =>{
  res.send('Hello World');  
})

//Con esto inializamos esta app
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})