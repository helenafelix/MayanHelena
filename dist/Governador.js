"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Governador extends Politico_1.default {
    qtdSecretarios;
    estado;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, qtdSecretarios, estado) {
        super(nome, partido, "Estadual", "Executivo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao);
        this.qtdSecretarios = qtdSecretarios;
        this.estado = estado;
    }
    getQuantidadeSecretarios() {
        return this.qtdSecretarios;
    }
    setQuantidadeSecretarios(x) {
        this.qtdSecretarios = x;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(x) {
        this.estado = x;
    }
    gerirPM() {
        return this.getNome() + " geriu a Polícia Militar de " + this.estado + ".";
    }
    administrarRodovias() {
        return this.getNome() + " administrou as rodovias estaduais de " + this.estado + ".";
    }
    coordenarEducacaoSaude() {
        return this.getNome() + " coordenou a educação e a saúde de " + this.estado + ".";
    }
    enviarPPA() {
        return this.getNome() + " elaborou e enviou à Assembleia Legislativa o PPA estadual.";
    }
    enviarLDO() {
        return this.getNome() + " elaborou e enviou à Assembleia Legislativa a LDO estadual.";
    }
    enviarLOA() {
        return this.getNome() + " elaborou e enviou à Assembleia Legislativa a proposta de LOA estadual.";
    }
    exerceMandato() {
        console.log(this.getNome() + " sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
}
exports.default = Governador;
//# sourceMappingURL=Governador.js.map