import { Coordinate } from "../utilities/coordinate.model";

export class Lobby {

    constructor(public center: Coordinate,
                public radius: number,
                public entryPoints: Coordinate[],
                public exitPoints: Coordinate[],
                public enterArena: Coordinate[]) {}

}