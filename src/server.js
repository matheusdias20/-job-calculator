const express = require("express");
const server = express();
const routes = require("./routes");

const path = require("path");

// Configuração da porta - heroku
var porta = process.env.PORT || 8080

// Usando template engine
server.set('view engine', 'ejs')


// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))


// Habilitar arquivos statics - public
server.use(express.static("public"))


// Utilizar o req.body
server.use(express.urlencoded({ extended: true } ))


// Routes
server.use(routes)

server.listen(porta, () => console.log('rodando'))

