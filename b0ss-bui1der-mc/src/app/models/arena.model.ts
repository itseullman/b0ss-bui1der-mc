import { Coordinate } from "../utilities/coordinate.model";

export class Arena {
    constructor(public center: Coordinate, 
                public radius: number,
                public entryPoints: Coordinate[],
                public exitPoints: Coordinate[]) {}
}