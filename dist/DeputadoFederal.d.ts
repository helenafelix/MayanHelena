import PoliticoLegislativo from "./PoliticoLegislativo";
export default class DeputadoFederal extends PoliticoLegislativo {
    private bancada;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, bancada: string);
    getBancada(): string;
    setBancada(x: string): void;
    getCargo(): string;
    legislar(): string;
    exerceMandato(): void;
    votarPEC(): string;
    criarCPINacional(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=DeputadoFederal.d.ts.map