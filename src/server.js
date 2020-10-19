// importar depedencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express()



// criando uma rota
server

    .use(express.urlencoded({extended: true}))
    // utilizando arquivos estaticos
    .use(express.static('public'))

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    
//ligar o servidor
server.listen(5500)