import PoliticoLegislativo from "./PoliticoLegislativo";
export default class Senador extends PoliticoLegislativo {
    private estado;
    private anoEleito;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, anoEleito: number);
    getEstado(): string;
    setEstado(x: string): void;
    getAnoEleito(): number;
    setAnoEleito(x: number): void;
    getCargo(): string;
    legislar(): string;
    exerceMandato(): void;
    aprovarAutoridade(): string;
    julgarCrimeResponsabilidade(): string;
    representarEstado(): string;
}
//# sourceMappingURL=Senador.d.ts.map