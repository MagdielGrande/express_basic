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

//respondiendo texto 
//localhost:3000/launchx
app.get('/magdiel', (req, res) => {
res.send('Bienvenidos a Launch X')
})
//regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name:"Explorer", msg:"Hola"}
res.send(explorer)
})

//Query Params: recibir parametros por la url
// http://localhost:3000/explorers/Magdiel
//req.params = {"explorerName":"Magdiel"}
app.get('/explorers/:explorerName', (req, res)=>{
    res.send(req.params)
})