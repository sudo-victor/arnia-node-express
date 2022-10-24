const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "./arnia.csv");
const resultPath = path.join(__dirname, "./result.json");
const result2Path = path.join(__dirname, "./result2.json");

const csvText = fs.readFileSync(filePath, "utf8")

const dataSeparated = csvText.replace(/(\r\n)|\r|\n/g, '\n').split(/\n+/g)

fs.writeFileSync( resultPath, JSON.stringify({ message: "Hello World 2" }))

const result = dataSeparated.map((nome) => {
    const [first, ...last] = nome.split(' ')
    return {
        nome: first,
        sobrenome: last.join(' ')
    }
})

result.shift();


fs.writeFileSync( result2Path, JSON.stringify(result) )


// Transform a variavel csvText em um objeto com atributo nome { nome: "Linha do CSV" }
// Salve os dados transformados no arquivo result.json
// Transform a variavel csvText em um objeto com atributo nome { nome: "", sobrenome: "" }
// Salve os dados transformados no arquivo result2.json
