let dados = require('./dados');

function retornarMensagemDoDia(dia){
    return dados.filmes[dia - 1];

}
exports.retornarMensagemDoDia = retornarMensagemDoDia;