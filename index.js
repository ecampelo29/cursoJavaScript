import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { Conta } from "./Conta.js"
import { Diretor } from "./Diretor.js"
import { Gerente } from "./Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"


const cliente1 = new Cliente("Ricardo", 112313213, "kdkd")
const cliente2 = new Cliente("Alice", 113232213, "drdrd")

const contaRicardo = new ContaCorrente(10014, cliente1 )
const contaAlice = new ContaCorrente (100334, cliente2 )

contaRicardo.depositar(100)
contaRicardo.sacar(20)
contaRicardo.transferir(50, contaAlice)

const PoupancaAlice = new ContaPoupanca(30, 100334, cliente2 )
PoupancaAlice.sacar(10)


const diretor = new Diretor('Rodrigo', 10000, 12349586795)
const gerente = new Gerente('Ricardo',  5000, 12566586795)

diretor.cadastrarSenha("123304")
gerente.cadastrarSenha("abcd")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "abcd")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12s3304")
const clienteEstaLogado = SistemaAutenticacao.login (cliente2, "drdrd")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)

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