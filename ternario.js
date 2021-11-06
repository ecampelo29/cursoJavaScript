const idadeMinina = 18
const idadeCliente = 19

if (idadeCliente >= idadeMinina) {
    console.log("Cerveja")
} else {
    console.log("suco")
}

// ternário ou três operadores 

console.log(idadeCliente >= idadeMinina ? "cerveja é verdadeiro" : "suco é falso")

const ternario = idadeCliente >= idadeMinina ? "cerveja é verdadeiro mesmo" : "suco é falso mesmo"

console.log(ternario)


// exercícios

a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}
