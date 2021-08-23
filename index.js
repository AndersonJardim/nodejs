const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    //rega de negócio
    console.log('Achou a minha rota! (123)');
    res.json({ mensagem: 'Rota Funcionando! (Teste 123)' });
})

app.listen(3000, () => {
    console.log('Meu servidor está funcionando! (Teste 123)');
})