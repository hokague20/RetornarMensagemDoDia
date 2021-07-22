const express = require('express');
const app = express();

let mensagemDoDia = require('./mensagemDoDia');


let data = new Date();


app.get('/', (req, res) => {
    let dia = data.getDay();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});

});

app.listen(8080 , () => {
    console.log('server started');
});