// Instalar o yarn "npm install --global yarn"

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resultPath = path.join(__dirname,  'result.txt')
const lembretesPath = path.join(__dirname,  'lembretes.txt')

// const questions = [
//     {
//       name: "lembrete",
//       type: "list",
//       message: "Qual açao deseja fazer?",
//       choices: ["Salvar", "Ler"],
//     },
// ]


// const questions2 = [
//     {
//       name: "nome",
//       type: "input",
//       message: "Qual o seu nome?",
//     },
//     {
//       name: "idade",
//       type: "input",
//       message: "Qual o sua idade?",
//     },
// ]

// inquirer
//     .prompt(questions2)
//     .then(({ nome, idade }) => {
//       fs.writeFileSync(resultPath, `O ${nome} tem ${idade} anos`)
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         console.log('n deu pra rodar')
//         const result1 = path.join()
//       } else {
//         // Something else went wrong
//         console.log(error)
//       }
//     });


const question3 = [
      {
      name: "lembrete",
      type: "list",
      message: "Qual açao deseja fazer?",
      choices: ["Salvar", "Ler"],
    },
]

const question4 = [
  {
    name: "aviao",
    type: "input",
    message: "O que vc quer ser lembrado?",
  },
]

inquirer
    .prompt(question3)
    .then((anwser) => {
      if(anwser.lembrete === "Salvar") {
        inquirer
          .prompt(question4)
          .then((props) => {
            const lembretesSalvos = fs.readFileSync(lembretesPath, "utf8");
            const result = lembretesSalvos + "\n" + props.aviao
            fs.writeFileSync(lembretesPath, result)
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
      }
      if (anwser.lembrete === "Ler") {
        const lembretes = fs.readFileSync(lembretesPath, "utf8");
        console.log(lembretes);
        // Console do conteudo do arquivo lembretes
      }
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