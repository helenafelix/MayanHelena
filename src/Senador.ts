import PoliticoLegislativo from "./PoliticoLegislativo"

export default class Senador extends PoliticoLegislativo {
    private estado: string
    private anoEleito: number

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, anoEleito: number){
        super(nome, partido, "Federal", local, endereco, remuneracao)
        this.estado = estado
        this.anoEleito = anoEleito
    }

    getEstado(): string{ return this.estado }
    setEstado(x: string): void{ this.estado = x }

    getAnoEleito(): number{ return this.anoEleito }
    setAnoEleito(x: number): void{ this.anoEleito = x }

    getCargo(): string{ return "Senador(a) por "+this.estado }

    legislar(): string{ return this.getNome()+" legisla sobre leis federais." }

    exerceMandato(): void{
        console.log(this.getNome()+" sabatina e aprova ministros do STF, o Procurador-Geral da República e presidentes do Banco Central. "+this.legislar()+" Autoriza operações financeiras externas.")
    }

    aprovarAutoridade(): string{ return this.getNome()+" aprovou uma autoridade de alto escalão." }
    julgarCrimeResponsabilidade(): string{ return this.getNome()+" julgou um crime de responsabilidade." }
    representarEstado(): string{ return this.getNome()+" representou os interesses de "+this.estado+"." }
}