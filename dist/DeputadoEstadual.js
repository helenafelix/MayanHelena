"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PoliticoLegislativo_1 = __importDefault(require("./PoliticoLegislativo"));
class DeputadoEstadual extends PoliticoLegislativo_1.default {
    estado;
    comissoes;
    constructor(nome, partido, local, endereco, remuneracao, estado, primeiraComissao) {
        super(nome, partido, "Estadual", local, endereco, remuneracao);
        this.estado = estado;
        this.comissoes = [primeiraComissao];
    }
    getEstado() { return this.estado; }
    setEstado(x) { this.estado = x; }
    getComissoes() { return this.comissoes; }
    addComissao(nome) { this.comissoes.push(nome); }
    getCargo() { return "Deputado(a) Estadual por " + this.estado; }
    legislar() { return this.getNome() + " legisla sobre assuntos de interesse do estado de " + this.estado + "."; }
    exerceMandato() {
        console.log(this.legislar() + " Também fiscaliza o governador.");
    }
    votarPPA() { return this.getNome() + " votou o PPA de " + this.estado + "."; }
    votarLDO() { return this.getNome() + " votou a LDO de " + this.estado + "."; }
    votarLOA() { return this.getNome() + " votou a LOA de " + this.estado + "."; }
    proporEmendaConstituicao() { return this.getNome() + " propôs uma emenda à constituição estadual."; }
    criarCPI() { return this.getNome() + " criou uma CPI estadual."; }
}
exports.default = DeputadoEstadual;
//# sourceMappingURL=DeputadoEstadual.js.map