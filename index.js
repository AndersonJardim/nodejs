const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    //rega de negócio
    console.log('Achou a minha rota! (Teste456)');
    res.json({ mensagem: 'Rota Funcionando! (Teste 456)' });
})

app.listen(3000, () => {
    console.log('Meu servidor está funcionando! (Teste 456)');
})