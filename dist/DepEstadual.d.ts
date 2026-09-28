import Politico from "./Politico";
export default class DepEstadual extends Politico {
    private estado;
    private listaComissoes;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, estado: string, listaComissoes: string[]);
    getEstado(): string;
    setEstado(x: string): void;
    getListaComissoes(): string[];
    setListaComissoes(x: string[]): void;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporEmendaEstadual(): string;
    criarCPIEstadual(): string;
    exerceMandato(): void;
}
//# sourceMappingURL=DepEstadual.d.ts.map