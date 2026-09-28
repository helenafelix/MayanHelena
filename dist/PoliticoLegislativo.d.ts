import Politico from "./Politico";
export default abstract class PoliticoLegislativo extends Politico {
    constructor(nome: string, partido: string, esfera: string, local: string, endereco: string, remuneracao: number);
    abstract legislar(): string;
}
//# sourceMappingURL=PoliticoLegislativo.d.ts.map