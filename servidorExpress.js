const express = require('express');
const app = express()


//servidor disponible
app.listen(3000, () => {
    console.log('localhost/servidorExpress OK')
})

//Crea la ruta /servidorExpress en nuestro servidor por el puerto 3000
app.get('/servidorExpress', (req, res) => {
    res.send('servidor en express.js')
})

//Crea una ruta /pruebaApi en nuesro servidor por el puerto 3000
app.get('/pruebaApi' , (req, res) => {
    res.send('API funcionando')
})

app.get('/alumno/:nombre', (req, res) => {
    res.send('Ruta con parámetro ...  ')
})

app.get('/edad/:edad', (req, res) => {
    const e = req.params.edad;
    e > 17 
    ? res.send( 'eres mayor de edad')
    : res.send('eres menor de edad')
})


app.get('*/redireccion', (req, res) => {
    res.redirect('https://twitter.com/home');
})

//Para todo acceso que no tenga una ruta creada en nuestro servidor,sigo * corresponde al comodin que instancia todo
app.get('*', (req, res) => {
    res.send('<center><h1>No existe la ruta</h1></center')
})