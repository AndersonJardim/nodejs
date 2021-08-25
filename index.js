const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

//RECUPERA TODOS OS REGISTROS
app.get('/', (req, res) => {
    console.log('RECUPERA TODOS OS REGISTROS');
    res.json({ mensagem: 'RECUPERA TODOS OS REGISTROS' });
});

//PEGAR SOMENTE OS REGISTROS COM O ID
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE OS REGISTROS COM O ID: ${id}` });
    //res.json({ mensagem: 'PEGAR SOMENTE OS REGISTROS COM O ID: ${id}' });  //ERRADO
});

//CRIAR UM REGOSTRO
app.post('/', (req, res) => {
    const body = req.body;
    res.json({ mensagem: `Criar usuário` });
});

//ATUALIZAR SOMENTE OS REGISTROS COM O ID
app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID ${id}` });
});

//DELETEAR SOMENTE O REGISTRO  COM O ID
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE OS REGISTROS COM O ID: ${id}` });
});

app.listen(3000, () => {
    console.log('Meu servidor está funcionando! (Teste 123)');
});