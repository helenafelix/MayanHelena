"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PoliticoExecutivo_1 = __importDefault(require("./PoliticoExecutivo"));
class Presidente extends PoliticoExecutivo_1.default {
    constructor(nome, partido, local, endereco, remuneracao, qtdMinistros) {
        super(nome, partido, "Federal", local, endereco, remuneracao, qtdMinistros);
    }
    getCargo() { return "Presidente da República"; }
    exerceMandato() {
        console.log(this.getNome() + " (mandato): propõe, sanciona e veta leis e edita medidas provisórias.");
    }
    nomearMinistro() { return this.getNome() + " nomeou um Ministro de Estado."; }
    exonerarMinistro() { return this.getNome() + " exonerou um Ministro de Estado."; }
    comandarForcasArmadas() { return this.getNome() + " está comandando as Forças Armadas."; }
    representarPais() { return this.getNome() + " representou o país em um evento internacional."; }
    elaborarEnviarPPA() { return this.getNome() + " elaborou e enviou ao Congresso o Plano Plurianual (PPA) nacional."; }
    elaborarEnviarLDO() { return this.getNome() + " elaborou e enviou ao Congresso a Lei de Diretrizes Orçamentárias (LDO) nacional."; }
    elaborarEnviarLOA() { return this.getNome() + " elaborou e enviou ao Congresso a proposta de Lei Orçamentária Anual (LOA) nacional."; }
}
exports.default = Presidente;
//# sourceMappingURL=Presidente.js.map