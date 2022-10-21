const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "./arnia.csv");
const resultPath = path.join(__dirname, "./result.json");

const csvText = fs.readFileSync(filePath, "utf8")

const dataSeparated = csvText.replace(/(\r\n)|\r|\n/g, '\n').split(/\n+/g)

fs.writeFileSync( resultPath, JSON.stringify({ message: "Hello World 2" }))

const [first, ...last] = ['Victor', 'Soares', 'Teste']


const result = dataSeparated.map((nome) => {
    return { nome } + "\n"
})

// Transform a variavel csvText em um objeto com atributo nome { nome: "Linha do CSV" }
// Salve os dados transformados no arquivo result.json
// Transform a variavel csvText em um objeto com atributo nome { nome: "", sobrenome: "" }
// Salve os dados transformados no arquivo result2.json
