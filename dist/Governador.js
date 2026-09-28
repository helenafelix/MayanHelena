"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PoliticoExecutivo_1 = __importDefault(require("./PoliticoExecutivo"));
class Governador extends PoliticoExecutivo_1.default {
    estado;
    constructor(nome, partido, local, endereco, remuneracao, qtdSecretarios, estado) {
        super(nome, partido, "Estadual", local, endereco, remuneracao, qtdSecretarios);
        this.estado = estado;
    }
    getEstado() { return this.estado; }
    setEstado(x) { this.estado = x; }
    getCargo() { return "Governador(a) de " + this.estado; }
    exerceMandato() {
        console.log(this.getNome() + " (mandato): sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
    gerirPoliciaMilitar() { return this.getNome() + " está gerindo a polícia militar de " + this.estado + "."; }
    administrarRodovias() { return this.getNome() + " administrou as rodovias estaduais de " + this.estado + "."; }
    coordenarEducacaoSaude() { return this.getNome() + " coordenou a educação e a saúde de " + this.estado + "."; }
    elaborarEnviarPPA() { return this.getNome() + " elaborou e enviou à Assembleia Legislativa o PPA estadual."; }
    elaborarEnviarLDO() { return this.getNome() + " elaborou e enviou à Assembleia Legislativa a LDO estadual."; }
    elaborarEnviarLOA() { return this.getNome() + " elaborou e enviou à Assembleia Legislativa a proposta de LOA estadual."; }
}
exports.default = Governador;
//# sourceMappingURL=Governador.js.map