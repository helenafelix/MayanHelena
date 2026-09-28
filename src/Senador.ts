import Politico from "./Politico"

export default class Senador extends Politico {
    private estado: string
    private anoEleito: number

    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, estado: string, anoEleito: number){
        super(nome, partido, "Federal", "Legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao)
        this.estado = estado
        this.anoEleito = anoEleito
    }

    getEstado(): string{
        return this.estado
    }

    getAnoEleito(): number{
        return this.anoEleito
    }

    exerceMandato(): void{
        console.log(this.getNome()+" sabatina e aprova ministros do STF, o Procurador-Geral da República e presidentes do Banco Central, legisla sobre leis federais e autoriza operações financeiras externas.")
    }

    aprovarAutoridade(): string{
        return this.getNome()+" aprovou uma autoridade de alto escalão."
    }

    julgarCrime(): string{
        return this.getNome()+" julgou um crime de responsabilidade."
    }

    representarEstado(): string{
        return this.getNome()+" representou os interesses de "+this.estado+"."
    }
}