const fs = require('fs');
const path = require('path');

// A função csvDataFormatted deverá formatar o conteudo do arquivo data/pokemons.csv
// e retorna um array de objetos:
// {
//     name: 'Cloyster',
//     type: 'Water Ice', junçao do type 1 e type 2
//     total: '525',
//     hp: '50',
//     attack: '95',
//     defense: '180',
//     sp_attack: '85',
//     sp_def: '45',
//     speed: '70',
//     legendary: '1'
// },

function csvDataFormatted() {
    const filePath = path.join(__dirname, '../data/pokemons.csv');
    const csvText = fs.readFileSync(filePath, 'utf8');
    const formattedData = csvText.replace(/\n\r|\n|\n\n/g, "\n").split('\n');
    
    formattedData.shift();

    return formattedData.map((pokemon) => {
        const [
            id,
            name,
            type_1,
            type_2,
            total,
            hp,
            attack,
            defense,
            sp_atk,
            sp_def,
            speed,
            generation,
            legendary
        ] = pokemon.split(',');

        return {
            name,
            type: `${type_1} ${type_2}`,
            total,
            hp,
            attack,
            defense,
            sp_atk,
            sp_def,
            speed,
            generation,
            legendary: legendary === "False" ? false : true
        }
    })
}

const csvData = csvDataFormatted();

module.exports = { csvData };
