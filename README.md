# Aula 1
npm init
npm install -g yarn
yarn -v
1.22.5
yarn add express
yarn add v1.22.5

# Aula 2 - API REST, Padrão CRUD e Rotas c/ Express no NodeJS
yarn global add nodemon
yarn start
yarn add morgan

# Aula 3 - intalei mongodb do docker e conectei
mongodb://localhost:27017

## adicionei gaveta / filme
## exemplo de registro
{
    "_id": {
        "$oid": "612668df99779061f8a9c5b8"
    },
    "titulo": "Vingadores - Guerra Infinita",
    "categoria": "Heróis",
    "ano": "2020",
    "link": "https://www.imdb.com/title/tt4154756/",
    "atores": ["Ator 1", "Ator 2"],
    "premios": [{
      "nome": "premio 1",
      "ano": "2020"
    }],
    "lancado": true
    }