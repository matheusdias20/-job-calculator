const sqlite3 = require('sqlite3');
const { open } = require('sqlite') // única funcionalidade necessária do sqlite para utilizar = open


module.exports = () => open({
    filename: './database.sqlite',  // Nome do arquivo onde ele irá salvar as informações
    driver: sqlite3.Database
});
