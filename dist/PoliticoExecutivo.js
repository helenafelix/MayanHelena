"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class PoliticoExecutivo extends Politico_1.default {
    qtdAuxiliares;
    constructor(nome, partido, esfera, local, endereco, remuneracao, qtdAuxiliares) {
        super(nome, partido, esfera, "Executivo", local, endereco, remuneracao);
        this.qtdAuxiliares = qtdAuxiliares;
    }
    getQtdAuxiliares() { return this.qtdAuxiliares; }
    setQtdAuxiliares(x) { this.qtdAuxiliares = x; }
}
exports.default = PoliticoExecutivo;
//# sourceMappingURL=PoliticoExecutivo.js.map