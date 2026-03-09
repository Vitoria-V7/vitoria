class conta{
    constructor(tipo,titular,saldo){
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
     mostrarExtrato(){
                return `A conta ${this.tipo} do ${this.titular} tem ${this.saldo} reais`;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
    }
}
let contaCorrente = new conta("Corrente", "João", 10000);
let contaPoupanca = new conta("poupança", "Maria", 50000);
contaCorrente.depositar(1500);
console.log(contaCorrente.mostrarExtrato());