const express = require('express');
const cors = require('cors');
const faker = require('faker');
const { json } = require('body-parser');

const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(cors());
app.use(express.json());

const gerarPessoaAleatoria = () => {

    let pessoa = {
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        position: {
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        }
    }
    return (pessoa);

}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let vetorPessoas = [];
    for (let i = 0; i < 10; i++) {
        vetorPessoas.push(gerarPessoaAleatoria());

    }
    return res.json(vetorPessoas);
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${port}`);
})