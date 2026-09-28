import Politico from "./Politico"

export default class DepEstadual extends Politico {
    private estado: string
    private listaComissoes: string[]

    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, estado: string, listaComissoes: string[]){
        super(nome, partido, "Estadual", "Legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao)
        this.estado = estado
        if(listaComissoes.length == 0){
            throw new Error("O deputado estadual precisa participar de ao menos uma comissão.")
        }
        this.listaComissoes = listaComissoes
    }

    getEstado(): string{
        return this.estado
    }

    setEstado(x: string): void{
        this.estado = x
    }

    getListaComissoes(): string[]{
        return this.listaComissoes
    }

    setListaComissoes(x: string[]): void{
        if(x.length == 0){
            throw new Error("O deputado estadual precisa participar de ao menos uma comissão.")
        }
        this.listaComissoes = x
    }

    votarPPA(): string{
        return this.getNome()+" votou o PPA de "+this.estado+"."
    }

    votarLDO(): string{
        return this.getNome()+" votou a LDO de "+this.estado+"."
    }

    votarLOA(): string{
        return this.getNome()+" votou a LOA de "+this.estado+"."
    }

    proporEmendaEstadual(): string{
        return this.getNome()+" propôs uma emenda à constituição estadual."
    }

    criarCPIEstadual(): string{
        return this.getNome()+" criou uma CPI estadual."
    }

    exerceMandato(): void{
        console.log(this.getNome()+" legisla sobre assuntos de interesse do estado de "+this.estado+" e fiscaliza o governador.")
    }
}