import Politico from "./Politico";
export default class DepFederal extends Politico {
    private bancada;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, bancada: string);
    getBancada(): string;
    setBancada(x: string): void;
    exerceMandato(): void;
    votarPEC(): string;
    criarCPI(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=DepFederal.d.ts.map