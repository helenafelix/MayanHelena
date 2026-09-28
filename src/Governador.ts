import Politico from "./Politico"

export default class Governador extends Politico {
    private qtdSecretarios: number
    private estado: string

    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, qtdSecretarios: number, estado: string){
        super(nome, partido, "Estadual", "Executivo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao)
        this.qtdSecretarios = qtdSecretarios
        this.estado = estado
    }

    getQuantidadeSecretarios(): number{
        return this.qtdSecretarios
    }

    setQuantidadeSecretarios(x: number): void{
        this.qtdSecretarios = x
    }

    getEstado(): string{
        return this.estado
    }

    setEstado(x: string): void{
        this.estado = x
    }

    gerirPM(): string{
        return this.getNome()+" geriu a Polícia Militar de "+this.estado+"."
    }

    administrarRodovias(): string{
        return this.getNome()+" administrou as rodovias estaduais de "+this.estado+"."
    }

    coordenarEducacaoSaude(): string{
        return this.getNome()+" coordenou a educação e a saúde de "+this.estado+"."
    }

    enviarPPA(): string{
        return this.getNome()+" elaborou e enviou à Assembleia Legislativa o PPA estadual."
    }

    enviarLDO(): string{
        return this.getNome()+" elaborou e enviou à Assembleia Legislativa a LDO estadual."
    }

    enviarLOA(): string{
        return this.getNome()+" elaborou e enviou à Assembleia Legislativa a proposta de LOA estadual."
    }

    exerceMandato(): void{
        console.log(this.getNome()+" sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.")
    }
}