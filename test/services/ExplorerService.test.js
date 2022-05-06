const ExplorerService = require("./../../lib/services/ExplorerService");

describe("ExplorerService", () => {
    test ("Requerimiento 1: Calcular todos los explorers en una mision ", () => {
    const explorers = [{ mission: "node"}];
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.filterByMission).toBe(1);
});

});




