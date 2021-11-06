// conversão implícita

const numero = 456
const numeroString = "456"

console.log('Usando == se compara o conteúdo da variável, porém há conversão implícita: ', numero == numeroString)

console.log('Usando === se compara o conteúdo e o tipo da variável: ', numero === numeroString)

console.log('Usando + o javascript irá concatenar os valores: ', numero + numeroString)


// conversão explícita

console.log('Usando + conversão explícita com Number somamos os valores: ', numero + Number(numeroString))

console.log('Usando + conversão explícita com String concatenamos os valores: ', String(numero) + numeroString)

//dddd