const express = require('express');
const app = express();
const db = require('./app/config/db.config.js');
// const Cliente = db.Cliente;
let router = require('./app/routes/routes.js');
const cors = require('cors');

const allowedOrigins = ['http://localhost:5173','https://painel-de-clientes.vercel.app'];

app.use(cors({
  origin: function(origin, callback){
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use(express.static('resources'));
app.use('/', router);

const server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`App está rodando no endereço http://${host}:${port}`);
});

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Apaga e recria a tabela usando { force: true }');
//     Cliente.sync().then(() => {
//         const clientes = [
//             { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
//             { nome: 'Sara', idade: 31, email: 'sara@email.com' },
//             { nome: 'Emilly', idade: 18, email: 'emilly@email.com' },
//         ]

//         clientes.forEach(cliente => Cliente.create(cliente));
//     })
// }); 