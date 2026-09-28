import PoliticoExecutivo from "./PoliticoExecutivo";
export default class Governador extends PoliticoExecutivo {
    private estado;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdSecretarios: number, estado: string);
    getEstado(): string;
    setEstado(x: string): void;
    getCargo(): string;
    exerceMandato(): void;
    gerirPoliciaMilitar(): string;
    administrarRodovias(): string;
    coordenarEducacaoSaude(): string;
    elaborarEnviarPPA(): string;
    elaborarEnviarLDO(): string;
    elaborarEnviarLOA(): string;
}
//# sourceMappingURL=Governador.d.ts.map