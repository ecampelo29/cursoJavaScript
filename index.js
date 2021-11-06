import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 112313213)
const cliente2 = new Cliente("Alice", 113232213)

const contaRicardo = new ContaCorrente(10014, cliente1)
const contaAlice = new ContaCorrente(100334, cliente2)


contaRicardo.depositar(100)
contaRicardo.sacar(20)
contaRicardo.transferir(50, contaAlice)

//console.log(contaRicardo)
//console.log(ContaCorrente.nrDeContas)

contaAlice.cliente = contaAlice
console.log(contaAlice)

/*
para criar um pacote json:
no terminal
>> npm init
>> informar o nome do pacote
>> versão não importa neste momento
>> descrever o projeto
>> entry point é qual o arquivo que irá ser o executor inicial do projeto (já vem um por default)
>> comando de teste deixar em branco
>> git manter o informado
>> keyword deixar em branco
>> author 
>> licença manter a padrão

>> sim para criar o pacote que aparece dentro do diretório atual
>> incluir "type" :"module" para que se comporte como módulo e passe a importar os outro arquivos. 
*/