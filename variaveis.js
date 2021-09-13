// var -> primeira forma de se delcarar variáveis no js. 
// permite o uso independente da posição da declaração, por isso deixou de ser usada 
// para resolver esse problema da var foram criadas a let que permite trocar o valor da variável 
// e a const, que não permite novas atribuições de valores. 

const print = console.log
let forma = 'retângulo'
let altura = 5
let comprimento = 7
let area

if (forma === 'retângulo') {
    area = altura * comprimento
} 
else {
    area = (altura * comprimento)/2
}


print(area)

const formaConst = 'triângulo'
const alturaConst = 5
const comprimentoConst = 7
let areaConst

if (formaConst === 'retângulo') {
    areaConst = alturaConst * comprimentoConst
} 
else {
    areaConst = (alturaConst* comprimentoConst)/2
}

print(areaConst)

// exercício
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log('Resposta Exercício no bloco:', respostaDeTudo, idade, pi)

}
console.log('Resposta Exercício:', respostaDeTudo, idade, pi)