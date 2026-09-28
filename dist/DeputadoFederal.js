"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PoliticoLegislativo_1 = __importDefault(require("./PoliticoLegislativo"));
class DeputadoFederal extends PoliticoLegislativo_1.default {
    bancada;
    constructor(nome, partido, local, endereco, remuneracao, bancada) {
        super(nome, partido, "Federal", local, endereco, remuneracao);
        this.bancada = bancada;
    }
    getBancada() { return this.bancada; }
    setBancada(x) { this.bancada = x; }
    getCargo() { return "Deputado(a) Federal"; }
    legislar() { return this.getNome() + " legisla sobre o código penal, o código tributário e as leis trabalhistas."; }
    exerceMandato() {
        console.log(this.legislar() + " Também fiscaliza o presidente da República.");
    }
    votarPEC() { return this.getNome() + " votou uma PEC (emenda à Constituição Federal)."; }
    criarCPINacional() { return this.getNome() + " criou a CPI nacional."; }
    votarPPA() { return this.getNome() + " votou o PPA nacional."; }
    votarLDO() { return this.getNome() + " votou a LDO nacional."; }
    votarLOA() { return this.getNome() + " votou a LOA nacional."; }
    proporLeiComplementar() { return this.getNome() + " propôs uma lei complementar."; }
}
exports.default = DeputadoFederal;
//# sourceMappingURL=DeputadoFederal.js.map