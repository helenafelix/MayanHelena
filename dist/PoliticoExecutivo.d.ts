import Politico from "./Politico";
export default abstract class PoliticoExecutivo extends Politico {
    private qtdAuxiliares;
    constructor(nome: string, partido: string, esfera: string, local: string, endereco: string, remuneracao: number, qtdAuxiliares: number);
    getQtdAuxiliares(): number;
    setQtdAuxiliares(x: number): void;
    abstract elaborarEnviarPPA(): string;
    abstract elaborarEnviarLDO(): string;
    abstract elaborarEnviarLOA(): string;
}
//# sourceMappingURL=PoliticoExecutivo.d.ts.map