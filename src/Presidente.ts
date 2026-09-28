import Politico from "./Politico"

export default class Presidente extends Politico {
    private quantidadeMinistros: number

    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, quantidadeMinistros: number){
        super(nome, partido, "Federal", "Executivo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao)
        this.quantidadeMinistros = quantidadeMinistros
    }

    getQuantidadeMinistros(): number{
        return this.quantidadeMinistros
    }

    setQuantidadeMinistros(x: number): void{
        this.quantidadeMinistros = x
    }

    nomearMinistro(): string{
        return this.getNome()+" nomeou um Ministro de Estado."
    }

    exonerarMinistro(): string{
        return this.getNome()+" exonerou um Ministro de Estado."
    }

    comandarFA(): string{
        return this.getNome()+" comanda as Forças Armadas."
    }

    representarPais(): string{
        return this.getNome()+" representou o país em um evento internacional."
    }

    enviarPPA(): string{
        return this.getNome()+" elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional."
    }

    enviarLDO(): string{
        return this.getNome()+" elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional."
    }

    enviarLOA(): string{
        return this.getNome()+" elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional."
    }

    exerceMandato(): void{
        console.log(this.getNome()+" propõe, sanciona e veta leis e edita medidas provisórias.")
    }
}