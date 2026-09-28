import PoliticoLegislativo from "./PoliticoLegislativo"

export default class DeputadoEstadual extends PoliticoLegislativo {
    private estado: string
    private comissoes: string[]

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, primeiraComissao: string){
        super(nome, partido, "Estadual", local, endereco, remuneracao)
        this.estado = estado
        this.comissoes = [primeiraComissao]
    }

    getEstado(): string{ return this.estado }
    setEstado(x: string): void{ this.estado = x }

    getComissoes(): string[]{ return this.comissoes }
    addComissao(nome: string): void{ this.comissoes.push(nome) }

    getCargo(): string{ return "Deputado(a) Estadual por "+this.estado }

    legislar(): string{ return this.getNome()+" legisla sobre assuntos de interesse do estado de "+this.estado+"." }

    exerceMandato(): void{
        console.log(this.legislar()+" Também fiscaliza o governador.")
    }

    votarPPA(): string{ return this.getNome()+" votou o PPA de "+this.estado+"." }
    votarLDO(): string{ return this.getNome()+" votou a LDO de "+this.estado+"." }
    votarLOA(): string{ return this.getNome()+" votou a LOA de "+this.estado+"." }
    proporEmendaConstituicao(): string{ return this.getNome()+" propôs uma emenda à constituição estadual." }
    criarCPI(): string{ return this.getNome()+" criou uma CPI estadual." }
}