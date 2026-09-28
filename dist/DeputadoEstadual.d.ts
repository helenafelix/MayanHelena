import PoliticoLegislativo from "./PoliticoLegislativo";
export default class DeputadoEstadual extends PoliticoLegislativo {
    private estado;
    private comissoes;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, primeiraComissao: string);
    getEstado(): string;
    setEstado(x: string): void;
    getComissoes(): string[];
    addComissao(nome: string): void;
    getCargo(): string;
    legislar(): string;
    exerceMandato(): void;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporEmendaConstituicao(): string;
    criarCPI(): string;
}
//# sourceMappingURL=DeputadoEstadual.d.ts.map