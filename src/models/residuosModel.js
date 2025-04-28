export class Residuos{
    constructor(id, nome, tipo, quantidade, dataColeta, localColeta, origem){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.quantidade = quantidade;
        this.dataColeta = dataColeta;
        this.localColeta = localColeta;
        this.origem = origem;
    }

    mostrarResiduos(){
        return `ID: ${this.id}, Nome: ${this.nome}, Tipo: ${this.tipo}, Quantidade: ${this.quantidade}, Data de Coleta: ${this.dataColeta}, Local de Coleta: ${this.localColeta}, Origem: ${this.origem}`;
    }


    static db_residuos = [];

    cadastrarResiduo(residuo){
        Residuos.db_residuos.push(residuo);
    }
}