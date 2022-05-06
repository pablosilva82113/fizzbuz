const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");


const explorers = Reader.readJsonFile("explorers.json");

console.log(explorers);

const Reader = require("./lib/utils/Reader");
const explorer = Reader.readJsonFile("explorers.json");

ExplorerService.filterByMission(explorer, "node");
ExplorerService.getAmountOfExplorersByMission(explorer, "node");
ExplorerService.getExplorersUsernamesByMission(explorer, "node");