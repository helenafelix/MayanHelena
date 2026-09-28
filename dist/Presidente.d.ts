import Politico from "./Politico";
export default class Presidente extends Politico {
    private quantidadeMinistros;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, quantidadeMinistros: number);
    getQuantidadeMinistros(): number;
    setQuantidadeMinistros(x: number): void;
    nomearMinistro(): string;
    exonerarMinistro(): string;
    comandarFA(): string;
    representarPais(): string;
    enviarPPA(): string;
    enviarLDO(): string;
    enviarLOA(): string;
    exerceMandato(): void;
}
//# sourceMappingURL=Presidente.d.ts.map