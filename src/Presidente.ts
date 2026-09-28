import PoliticoExecutivo from "./PoliticoExecutivo"

export default class Presidente extends PoliticoExecutivo {

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdMinistros: number){
        super(nome, partido, "Federal", local, endereco, remuneracao, qtdMinistros)
    }

    getCargo(): string{ return "Presidente da República" }

    exerceMandato(): void{
        console.log(this.getNome()+" (mandato): propõe, sanciona e veta leis e edita medidas provisórias.")
    }

    nomearMinistro(): string{ return this.getNome()+" nomeou um Ministro de Estado." }
    exonerarMinistro(): string{ return this.getNome()+" exonerou um Ministro de Estado." }
    comandarForcasArmadas(): string{ return this.getNome()+" está comandando as Forças Armadas." }
    representarPais(): string{ return this.getNome()+" representou o país em um evento internacional." }
    elaborarEnviarPPA(): string{ return this.getNome()+" elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional." }
    elaborarEnviarLDO(): string{ return this.getNome()+" elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional." }
    elaborarEnviarLOA(): string{ return this.getNome()+" elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional." }
}