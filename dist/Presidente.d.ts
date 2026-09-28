import PoliticoExecutivo from "./PoliticoExecutivo";
export default class Presidente extends PoliticoExecutivo {
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdMinistros: number);
    getCargo(): string;
    exerceMandato(): void;
    nomearMinistro(): string;
    exonerarMinistro(): string;
    comandarForcasArmadas(): string;
    representarPais(): string;
    elaborarEnviarPPA(): string;
    elaborarEnviarLDO(): string;
    elaborarEnviarLOA(): string;
}
//# sourceMappingURL=Presidente.d.ts.map