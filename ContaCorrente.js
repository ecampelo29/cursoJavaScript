import { Cliente } from "./Cliente.js"


export class ContaCorrente {
    static nrDeContas = 0
    _saldo = 0
    
    get saldo() {
        return this._saldo
    }
    
    set cliente (novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente
        } 
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        
        if (cliente instanceof Cliente) {
            this._cliente = cliente
        } 
        
        ContaCorrente.nrDeContas += 1
    }

    sacar(valor) {
        if (this._saldo >= 0) {
            this._saldo -= valor
            return valor
        }   
    }

    depositar(valor) {
        if (valor <= 0 ) return
        this._saldo += valor
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}