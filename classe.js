/**
 * Crie uma classe chamada RealConverter. O objetivo dela é agrupar funções que convertem o Real para outras moedas.
 * Ela deverá conter 4 métodos, sendo eles: toDollar, toEuro, toBitcoin e exchange
 * o método exchange será o responsavel por chamar os métodos de conversão, para isso,
 * ele deve receber os PARÂMETROS: value e coin('usd', 'eur', 'btc').
 * deve ser utilizado alguma estrutura condicional(if, switch, outro) para verificar o tipo da coin('usd', 'eur', 'btc') e executar o método
 * desejado.
 * Cada método de conversão deve receber o PARÂMETRO: value. e retornar o valor calculado e formatado.
 * 1real = 5.26 dolar
 * 1real = 5.18 euro
 * 1real = 103326.22 bitcoin
 * 
 * dica do método exchange
 * exchange(value, coin) {
 *  if (coin === 'usd') {
 *      return toDollar()
 *  }
 * }
 */

class RealConverter {
    constructor(value, coin) {
        this.value = value;
        this.coin = coin;
    }

    converterMapper = {
        usd: () => this.toDollar(),
        btc: () => this.toBitcoin(),
        eur: () => this.toEuro(),
    }

    exchange() {
        return this.converterMapper[this.coin](this.value)
    }

    toDollar() {
        return (this.value * 5.26).toFixed(2)
    }

    toEuro() {
        return (this.value * 5.18).toFixed(2)
    }

    toBitcoin() {
        return (this.value * 103326.22).toFixed(2)
    }
}


const realConverter = new RealConverter(10, 'btc');
console.log(realConverter.exchange())