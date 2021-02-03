const express = require('express')
const fs = require('fs');
const { send } = require('process');
const app = express();
app.use(express.json())

const data = JSON.parse(fs.readFileSync('./producto.txt'))

let contadorItems = 0 
let contadorRandom = 0

app.get('/items', (req,res) => {
    let productos = {
        items:data,
        cantidad : data.length
        
    }
    
    contadorItems++
    res.send(productos);


    })

app.get('/item-random',(req,res)=>{
let random = Math.floor(Math.random() * (data.length -0)) +0
let mostrar = {
    item: data[random]
}
contadorRandom++
res.send(mostrar)


})

app.get('/visitas',(req,res) =>{

    let visitas = {
        item1 : contadorItems,
        item2 : contadorRandom
    }

    res.send(visitas)

})


app.listen('3040', () =>{
    console.log('El servidor esta listo');
})






















/*const moment = require('moment')

const now = moment()
const birthday = moment('22012003', 'DD/MM/YYYY')
console.log(`Hoy es ${now.format('DD/MM/YYYY')}`)
console.log(`Nací el ${birthday.format('DD/MM/YYYY')}`)
console.log(`Desde mi nacimiento han pasado ${now.diff(birthday, 'years')} años`)
console.log(`Desde mi nacimiento han pasado ${now.diff(birthday, 'days')} días`)


const users = []

for(let i = 0 ; i<20; i++){
    users.push({
        id: casual.uuid,
        username: casual.username,
        password: casual.password
    }
    )}

//pido info
app.get('/', (req ,res)=>{

    console.log('hola')
    res.send(users)
    console.log(users.length)

})
//lo que manda el cliente
app.post('/',(req,res) =>{
    console.log(req.body)
    //le agrego a usuarios, un nuevo usuario, creado desde postman
    users.unshift(req.body)
    res.sendStatus(200)
    console.log(users.length)
})



*/

