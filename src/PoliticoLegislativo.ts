import Politico from "./Politico"

export default abstract class PoliticoLegislativo extends Politico {

    constructor(nome: string, partido: string, esfera: string, local: string, endereco: string, remuneracao: number){
        super(nome, partido, esfera, "Legislativo", local, endereco, remuneracao)
    }

    // todo legislativo legisla, mas sobre assuntos diferentes
    abstract legislar(): string
}