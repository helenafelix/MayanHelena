import PoliticoExecutivo from "./PoliticoExecutivo"

export default class Governador extends PoliticoExecutivo {
    private estado: string

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdSecretarios: number, estado: string){
        super(nome, partido, "Estadual", local, endereco, remuneracao, qtdSecretarios)
        this.estado = estado
    }

    getEstado(): string{ return this.estado }
    setEstado(x: string): void{ this.estado = x }

    getCargo(): string{ return "Governador(a) de "+this.estado }

    exerceMandato(): void{
        console.log(this.getNome()+" (mandato): sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.")
    }

    gerirPoliciaMilitar(): string{ return this.getNome()+" está gerindo a polícia militar de "+this.estado+"." }
    administrarRodovias(): string{ return this.getNome()+" administrou as rodovias estaduais de "+this.estado+"." }
    coordenarEducacaoSaude(): string{ return this.getNome()+" coordenou a educação e a saúde de "+this.estado+"." }
    elaborarEnviarPPA(): string{ return this.getNome()+" elaborou e enviou à Assembleia Legislativa o PPA estadual." }
    elaborarEnviarLDO(): string{ return this.getNome()+" elaborou e enviou à Assembleia Legislativa a LDO estadual." }
    elaborarEnviarLOA(): string{ return this.getNome()+" elaborou e enviou à Assembleia Legislativa a proposta de LOA estadual." }
}