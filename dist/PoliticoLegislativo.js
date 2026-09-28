"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class PoliticoLegislativo extends Politico_1.default {
    constructor(nome, partido, esfera, local, endereco, remuneracao) {
        super(nome, partido, esfera, "Legislativo", local, endereco, remuneracao);
    }
}
exports.default = PoliticoLegislativo;
//# sourceMappingURL=PoliticoLegislativo.js.map