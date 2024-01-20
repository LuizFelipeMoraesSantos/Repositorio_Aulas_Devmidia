const express = require('express');
const app = express();
app.use(express.json())

const { efetuarcalculo, retornaIMC, validarParametros } = require('./calculadoraimc');



app.get('/', (req, res) => {
    let peso = req.body.peso;
    let altura = req.body.altura;
    
    if(validarParametros(req.body.peso) && validarParametros(req.body.altura)){
        let calculo = efetuarcalculo(peso, altura);
        let faixaDePeso = retornaIMC(efetuarcalculo)
    
        let json = { calculo: calculo, faixaDePeso: faixaDePeso }
    
        res.json(json);
    }
    else
    {
        res.status(400).json({'Erro':'Peso ou altura inválidos'})
    }
   
});

app.listen(3000, () => {
    let data = new Date();
    console.log('Servidor funcionando em:' + data);
});