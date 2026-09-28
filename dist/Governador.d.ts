import Politico from "./Politico";
export default class Governador extends Politico {
    private qtdSecretarios;
    private estado;
    constructor(nome: string, partido: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number, qtdSecretarios: number, estado: string);
    getQuantidadeSecretarios(): number;
    setQuantidadeSecretarios(x: number): void;
    getEstado(): string;
    setEstado(x: string): void;
    gerirPM(): string;
    administrarRodovias(): string;
    coordenarEducacaoSaude(): string;
    enviarPPA(): string;
    enviarLDO(): string;
    enviarLOA(): string;
    exerceMandato(): void;
}
//# sourceMappingURL=Governador.d.ts.map