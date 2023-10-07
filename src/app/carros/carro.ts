export class Carro {

    nome!: string;
    ano!: number;
    id!:number;

    constructor(nome: string, ano:number, id:number){
        this.nome = nome;
        this.ano = ano;
        this.id = id;
    }
}
