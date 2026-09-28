import PoliticoLegislativo from "./PoliticoLegislativo"

export default class DeputadoFederal extends PoliticoLegislativo {
    private bancada: string

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, bancada: string){
        super(nome, partido, "Federal", local, endereco, remuneracao)
        this.bancada = bancada
    }

    getBancada(): string{ return this.bancada }
    setBancada(x: string): void{ this.bancada = x }

    getCargo(): string{ return "Deputado(a) Federal" }

    legislar(): string{ return this.getNome()+" legisla sobre o código penal, o código tributário e as leis trabalhistas." }

    exerceMandato(): void{
        console.log(this.legislar()+" Também fiscaliza o presidente da República.")
    }

    votarPEC(): string{ return this.getNome()+" votou uma PEC (emenda à Constituição Federal)." }
    criarCPINacional(): string{ return this.getNome()+" criou a CPI nacional." }
    votarPPA(): string{ return this.getNome()+" votou o PPA nacional." }
    votarLDO(): string{ return this.getNome()+" votou a LDO nacional." }
    votarLOA(): string{ return this.getNome()+" votou a LOA nacional." }
    proporLeiComplementar(): string{ return this.getNome()+" propôs uma lei complementar." }
}