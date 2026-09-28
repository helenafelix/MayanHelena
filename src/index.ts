import Politico from "./Politico"
import Presidente from "./Presidente"
import Governador from "./Governador"
import DepFederal from "./DepFederal"
import DepEstadual from "./DepEstadual"
import Senador from "./Senador"

let presidente = new Presidente("Luiz Inácio Lula da Silva", "PT", "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", 44008.52, 39)

let governadorPE = new Governador("Raquel Lyra", "PSD", "Palácio do Campo das Princesas", "Praça da República, Recife - PE", 33763.00, 24, "Pernambuco")
let governadorSP = new Governador("Tarcísio de Freitas", "Republicanos", "Palácio dos Bandeirantes", "Av. Morumbi, 4500, São Paulo - SP", 23000.00, 30, "São Paulo")

let camara = "Câmara dos Deputados"
let endCamara = "Praça dos Três Poderes, Brasília - DF"
let depFed1 = new DepFederal("Mendonça Filho", "União Brasil", camara, endCamara, 46366.19, "Governista")
let depFed2 = new DepFederal("Clarissa Tércio", "Republicanos", camara, endCamara, 46366.19, "Oposição")
let depFed3 = new DepFederal("Pedro Campos", "PSOL", camara, endCamara, 46366.19, "Governista")
let depFed4 = new DepFederal("Tabata Amaral", "PSB", camara, endCamara, 46366.19, "Governista")
let depFed5 = new DepFederal("Erika Hilton", "PSOL", camara, endCamara, 46366.19, "Governista")

let alepe = "Assembleia Legislativa de Pernambuco"
let endAlepe = "Rua da Aurora, 631, Recife - PE"
let alesp = "Assembleia Legislativa de São Paulo"
let endAlesp = "Av. Pedro Álvares Cabral, 201, São Paulo - SP"
let depEst1 = new DepEstadual("Dani Portela", "PSOL", alepe, endAlepe, 30934.00, "Pernambuco", ["Comissão de Direitos Humanos"])
let depEst2 = new DepEstadual("Gleide Ângelo", "PSB", alepe, endAlepe, 30934.00, "Pernambuco", ["Comissão de Educação", "Comissão de Saúde"])
let depEst3 = new DepEstadual("Débora Almeida", "PL", alepe, endAlepe, 30934.00, "Pernambuco", ["Comissão de Segurança Pública"])
let depEst4 = new DepEstadual("Itamar Borges", "MDB", alesp, endAlesp, 30934.00, "São Paulo", ["Comissão de Agricultura"])
let depEst5 = new DepEstadual("Delegada Graciela", "PL", alesp, endAlesp, 30934.00, "São Paulo", ["Comissão de Segurança Pública"])

let senado = "Senado Federal"
let senador1 = new Senador("Humberto Costa", "PT", senado, endCamara, 46366.19, "Pernambuco", 2018)
let senador2 = new Senador("Teresa Leitão", "PT", senado, endCamara, 46366.19, "Pernambuco", 2022)
let senador3 = new Senador("Flávio Bolsonaro", "PL", senado, endCamara, 46366.19, "Rio de Janeiro", 2018)


console.log("--- ENCAPSULAMENTO (atributos private, acesso por get/set) ---")
console.log(presidente.getNome())
presidente.setNome("Lula")
presidente.addProjeto("Novo PAC")
console.log(presidente.getNome()+" | "+presidente.getEsfera()+" | "+presidente.getPoder()+" | projetos: "+presidente.getProjetos())


console.log("\n--- HERANÇA (imprimeInfo veio de Politico) ---")
presidente.imprimeInfo()
governadorPE.imprimeInfo()
depEst2.imprimeInfo()


console.log("\n--- POLIMORFISMO (cada um exerce o mandato do seu jeito) ---")
let politicos: Politico[] = [presidente, governadorPE, depFed1, depEst1, senador1]
for(let p of politicos){
    p.exerceMandato()
}


console.log("\n--- ABSTRAÇÃO (Politico é abstrata, não pode ser instanciada) ---")
// let x = new Politico(...)  <- erro: Cannot create an instance of an abstract class
console.log("Politico só existe através de Presidente, Governador, DepFederal, DepEstadual e Senador.")


console.log("\n--- AÇÕES (cada categoria tem as suas, retornando a descrição) ---")
console.log(presidente.nomearMinistro())
console.log(presidente.comandarFA())
console.log(governadorPE.gerirPM())
console.log(governadorPE.enviarLOA())
console.log(depFed1.votarPEC())
console.log(depFed1.criarCPI())
console.log(depEst1.criarCPIEstadual())
console.log(depEst1.votarLDO())
console.log(senador1.aprovarAutoridade())
console.log(senador1.representarEstado())