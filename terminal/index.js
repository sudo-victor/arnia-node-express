// Instalar o yarn "npm install --global yarn"

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const resultPath = path.join(__dirname,  'result.json')

const questions = [
    {
      name: "pergunta_1",
      type: "input",
      message: "Digite algo",
    },
    {
      name: "pizza",
      type: "list",
      message: "Qual pizza você prefere?",
      choices: ["Mussarela", "Portuguesa", "Camarão"],
    },
]

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('n deu pra rodar')
      } else {
        // Something else went wrong
        console.log(error)
      }
    });

// EXERCÍCIO 1
// Pergunte o nome e a idade do usuário e salve em um aquivo a resposta com o seguinte formato:
// O {nome} tem {idade} anos


// EXERCÍCIO 2
// Perqunte se o usuário deseja salvar ou ler os lembretes
// Salvar: deve ser peguntado qual lembrete ele que salvar e adicionar a resposta no final do arquivo lembrete
// Ler: deve ser retornado no console a listagem de lembretes

// Consultas
// https://github.com/SBoudrias/Inquirer.js
// https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f