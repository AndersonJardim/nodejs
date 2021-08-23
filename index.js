const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    //rega de negócio
    console.log('Achou a minha rota!');
    res.json({ mensagem: 'Rota Funcionando!' });
})

app.listen(3000, () => {
    console.log('Meu servidor está funcionando!');
})