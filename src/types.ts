export type DumpedGarden = {
  width: number;
  height: number;
  foodField: number[];
  rockField: number[];
};

export type DumpedNest = {
  x: number;
  y: number;
  startingAnts: number;
  antsLimit: number;
};

export type DumpedSimulation = {
  garden: DumpedGarden;
  nests: DumpedNest[];
};