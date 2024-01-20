function efetuarcalculo(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}
 let resposta = efetuarcalculo()

function retornaIMC(resposta) {
    let status;
    if (resposta < 18) {
        status = 'Abaixo do peso!';
    }
    else if (resposta >= 18 && imc < 24) {
        status = 'peso normal';

    }
    else if (resposta >= 24.1 && imc < 30) {
        status = 'Acima do peso';
    }
    else {
        status = 'Obeso';
    }
}
let parametro;

function validarParametros(parametro){
    if(isNaN(parametro)){
        return false;
    }
    else{
        return true;
    }
}


module.exports = {
    efetuarcalculo,
    retornaIMC,
    validarParametros
}