
import { Cliente } from "./Cliente.js"


export class Conta {      
    constructor(saldoInicial, agencia, cliente) {
        //Aviso para não usar o contrutor mãe
        if (this.constructor == Conta) {
            throw new Error("Classe Abstrata não deve ser instanciada")
        }

        this.agencia = agencia
        
        if (cliente instanceof Cliente) {
            this._cliente = cliente
        }

        this._saldo = saldoInicial

    }
    
    get saldo() {
        return this._saldo
    }
    
    set cliente (novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente
        } 
    }

    // método abstrato, toda clase deve sobrescrevê-lo
    sacar (valor) {
        throw new Error ("Método abstrato deve ser implementado")
        /* implemente este cõdido na instância filha 
        let taxa = 1
        return this._sacar (valor, taxa)
        */
    }

    // a parte do saque que não altera entre os filhos fica protegida
    _sacar(valor, taxa) {        
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }  
        return 0 
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