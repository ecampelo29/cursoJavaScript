import { Conta } from "./Conta.js"


export class ContaCorrente extends Conta {
    static nrDeContasCorrentes = 0

    constructor(agencia, cliente) {
        super(0, agencia, cliente)
        
        ContaCorrente.nrDeContasCorrentes += 1
        } 
        
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa)
        }   
    
}