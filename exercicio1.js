const idade = 2
const nome	= "Lara"
const sobrenome	= "Ayumi"
const bacharel	= false
const dezAnosDepois	= "12"


const nomeCompleto = nome + sobrenome 
const resultado = idade +  dezAnosDepois


console.log('nomeCompleto: ', nomeCompleto)
console.log('resultado: ', resultado)
console.log('Comparando bacharel com zero', bacharel == 0)


// java é case sensitive e const não permite mudar o valor da variável, tipo o tuple do python:
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)