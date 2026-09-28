import Politico from "./Politico"

export default abstract class PoliticoExecutivo extends Politico {
    private qtdAuxiliares: number 

    constructor(nome: string, partido: string, esfera: string, local: string, endereco: string, remuneracao: number, qtdAuxiliares: number){
        super(nome, partido, esfera, "Executivo", local, endereco, remuneracao)
        this.qtdAuxiliares = qtdAuxiliares
    }

    getQtdAuxiliares(): number{ return this.qtdAuxiliares }
    setQtdAuxiliares(x: number): void{ this.qtdAuxiliares = x }

    // todo executivo elabora e envia o orçamento, mas cada um para o seu nível
    abstract elaborarEnviarPPA(): string
    abstract elaborarEnviarLDO(): string
    abstract elaborarEnviarLOA(): string
}