"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PoliticoLegislativo_1 = __importDefault(require("./PoliticoLegislativo"));
class Senador extends PoliticoLegislativo_1.default {
    estado;
    anoEleito;
    constructor(nome, partido, local, endereco, remuneracao, estado, anoEleito) {
        super(nome, partido, "Federal", local, endereco, remuneracao);
        this.estado = estado;
        this.anoEleito = anoEleito;
    }
    getEstado() { return this.estado; }
    setEstado(x) { this.estado = x; }
    getAnoEleito() { return this.anoEleito; }
    setAnoEleito(x) { this.anoEleito = x; }
    getCargo() { return "Senador(a) por " + this.estado; }
    legislar() { return this.getNome() + " legisla sobre leis federais."; }
    exerceMandato() {
        console.log(this.getNome() + " sabatina e aprova ministros do STF, o Procurador-Geral da República e presidentes do Banco Central. " + this.legislar() + " Autoriza operações financeiras externas.");
    }
    aprovarAutoridade() { return this.getNome() + " aprovou uma autoridade de alto escalão."; }
    julgarCrimeResponsabilidade() { return this.getNome() + " julgou um crime de responsabilidade."; }
    representarEstado() { return this.getNome() + " representou os interesses de " + this.estado + "."; }
}
exports.default = Senador;
//# sourceMappingURL=Senador.js.map