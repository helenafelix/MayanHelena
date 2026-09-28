import Politico from "./Politico"
import Presidente from "./Presidente"
import Governador from "./Governador"
import DeputadoFederal from "./DeputadoFederal"
import DeputadoEstadual from "./DeputadoEstadual"
import Senador from "./Senador"

let lula = new Presidente("Luiz Inácio Lula da Silva", "PT", "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", 44008.52, 38)

let raquel = new Governador("Raquel Lyra", "PSD", "Palácio do Campo das Princesas", "Praça da República, Recife - PE", 33763.00, 25, "Pernambuco")
let jeronimo = new Governador("Jerônimo Rodrigues", "PT", "Palácio de Ondina", "Av. Adhemar de Barros, Salvador - BA", 32000.00, 23, "Bahia")

let camara = "Câmara dos Deputados"
let endCamara = "Praça dos Três Poderes, Brasília - DF"
let fed1 = new DeputadoFederal("Mendonça Filho", "União Brasil", camara, endCamara, 46366.19, "Governista")
let fed2 = new DeputadoFederal("Clarissa Tércio", "Republicanos", camara, endCamara, 46366.19, "Oposição")
let fed3 = new DeputadoFederal("Pedro Campos", "PSOL", camara, endCamara, 46366.19, "Governista")
let fed4 = new DeputadoFederal("Elmar Nascimento", "União Brasil", camara, endCamara, 46366.19, "Oposição")
let fed5 = new DeputadoFederal("Alice Portugal", "PCdoB", camara, endCamara, 46366.19, "Governista")

let alepe = "Assembleia Legislativa de Pernambuco"
let endAlepe = "Rua da Aurora, 631, Recife - PE"
let alba = "Assembleia Legislativa da Bahia"
let endAlba = "Av. Luís Viana Filho, Salvador - BA"
let est1 = new DeputadoEstadual("Dani Portela", "PSOL", alepe, endAlepe, 30934.00, "Pernambuco", "Comissão de Direitos Humanos")
let est2 = new DeputadoEstadual("Gleide Ângelo", "PSB", alepe, endAlepe, 30934.00, "Pernambuco", "Comissão de Educação")
let est3 = new DeputadoEstadual("Débora Almeida", "PL", alepe, endAlepe, 30934.00, "Pernambuco", "Comissão de Saúde")
let est4 = new DeputadoEstadual("Rosemberg Pinto", "PT", alba, endAlba, 30934.00, "Bahia", "Comissão de Saúde")
let est5 = new DeputadoEstadual("Alan Sanches", "União Brasil", alba, endAlba, 30934.00, "Bahia", "Comissão de Educação")
est1.addComissao("Comissão de Saúde")

let senado = "Senado Federal"
let sen1 = new Senador("Humberto Costa", "PT", senado, endCamara, 46366.19, "Pernambuco", 2018)
let sen2 = new Senador("Teresa Leitão", "PT", senado, endCamara, 46366.19, "Pernambuco", 2022)
let sen3 = new Senador("Randolfe Rodrigues", "PT", senado, endCamara, 46366.19, "Amapá", 2018)


console.log("===== ENCAPSULAMENTO =====")
console.log("Antes:  "+lula.getNome())
lula.setNome("Lula")
lula.addProjeto("Novo PAC")
console.log("Depois: "+lula.getNome()+" | projetos: "+lula.getProjetos())

console.log("\n===== HERANÇA =====")
lula.imprimeInfo()
raquel.imprimeInfo()
console.log("Presidente e Governador herdam de PoliticoExecutivo (qtd auxiliares: "+lula.getQtdAuxiliares()+" e "+raquel.getQtdAuxiliares()+")")

console.log("\n===== POLIMORFISMO =====")
let todos: Politico[] = [lula, raquel, fed1, est1, sen1]
for(let p of todos){
    p.exerceMandato()
}

console.log("\n===== ABSTRAÇÃO =====")
// new Politico(...) dá erro: Politico, PoliticoExecutivo e PoliticoLegislativo são abstratas
for(let p of todos){
    console.log(p.getCargo())
}

console.log("\n===== AÇÕES =====")
console.log(lula.nomearMinistro())
console.log(lula.elaborarEnviarLOA())
console.log(raquel.gerirPoliciaMilitar())
console.log(raquel.elaborarEnviarPPA())
console.log(fed1.votarPEC())
console.log(fed1.criarCPINacional())
console.log(est1.votarLDO())
console.log(est1.criarCPI())
console.log(sen1.aprovarAutoridade())
console.log(sen1.representarEstado())