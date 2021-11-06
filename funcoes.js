// Forma declarativa de criação de função
function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// Expressão de função, onde a função é criada dentro de uma variável

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(4,5))

// arrow functions com uma linha de instrução
const apresentar = nome => `meu nome é ${nome}`
console.log(apresentar('Jão'))

const somaArrow = (num1, num2) => num1 + num2
console.log(somaArrow(4,8))

// arrow function com mais linhas de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num >= 10) {
        return "somente números menores que 10"
    } else {
        return num1 + num2
    }
}
console.log(somaNumerosPequenos(34,2))

