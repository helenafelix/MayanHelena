"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class DepEstadual extends Politico_1.default {
    estado;
    listaComissoes;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, estado, listaComissoes) {
        super(nome, partido, "Estadual", "Legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao);
        this.estado = estado;
        if (listaComissoes.length == 0) {
            throw new Error("O deputado estadual precisa participar de ao menos uma comissão.");
        }
        this.listaComissoes = listaComissoes;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(x) {
        this.estado = x;
    }
    getListaComissoes() {
        return this.listaComissoes;
    }
    setListaComissoes(x) {
        if (x.length == 0) {
            throw new Error("O deputado estadual precisa participar de ao menos uma comissão.");
        }
        this.listaComissoes = x;
    }
    votarPPA() {
        return this.getNome() + " votou o PPA de " + this.estado + ".";
    }
    votarLDO() {
        return this.getNome() + " votou a LDO de " + this.estado + ".";
    }
    votarLOA() {
        return this.getNome() + " votou a LOA de " + this.estado + ".";
    }
    proporEmendaEstadual() {
        return this.getNome() + " propôs uma emenda à constituição estadual.";
    }
    criarCPIEstadual() {
        return this.getNome() + " criou uma CPI estadual.";
    }
    exerceMandato() {
        console.log(this.getNome() + " legisla sobre assuntos de interesse do estado de " + this.estado + " e fiscaliza o governador.");
    }
}
exports.default = DepEstadual;
//# sourceMappingURL=DepEstadual.js.map