"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class DepFederal extends Politico_1.default {
    bancada;
    constructor(nome, partido, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, bancada) {
        super(nome, partido, "Federal", "Legislativo", nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(x) {
        this.bancada = x;
    }
    exerceMandato() {
        console.log(this.getNome() + " legisla sobre o código penal, o código tributário e as leis trabalhistas e fiscaliza o presidente da república.");
    }
    votarPEC() {
        return this.getNome() + " votou uma PEC (emenda à Constituição Federal).";
    }
    criarCPI() {
        return this.getNome() + " criou a CPI nacional.";
    }
    votarPPA() {
        return this.getNome() + " votou o PPA nacional.";
    }
    votarLDO() {
        return this.getNome() + " votou a LDO nacional.";
    }
    votarLOA() {
        return this.getNome() + " votou a LOA nacional.";
    }
    proporLeiComplementar() {
        return this.getNome() + " propôs uma lei complementar.";
    }
}
exports.default = DepFederal;
//# sourceMappingURL=DepFederal.js.map