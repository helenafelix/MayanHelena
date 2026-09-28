"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Presidente extends Politico_1.default {
    quantidadeMinistros;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, quantidadeMinistros) {
        super(nome, partido, "Federal", "Executivo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }
    setQuantidadeMinistros(x) {
        this.quantidadeMinistros = x;
    }
    nomearMinistro() {
        return this.getNome() + " nomeou um Ministro de Estado.";
    }
    exonerarMinistro() {
        return this.getNome() + " exonerou um Ministro de Estado.";
    }
    comandarFA() {
        return this.getNome() + " comanda as Forças Armadas.";
    }
    representarPais() {
        return this.getNome() + " representou o país em um evento internacional.";
    }
    enviarPPA() {
        return this.getNome() + " elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional.";
    }
    enviarLDO() {
        return this.getNome() + " elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }
    enviarLOA() {
        return this.getNome() + " elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional.";
    }
    exerceMandato() {
        console.log(this.getNome() + " propõe, sanciona e veta leis e edita medidas provisórias.");
    }
}
exports.default = Presidente;
//# sourceMappingURL=Presidente.js.map