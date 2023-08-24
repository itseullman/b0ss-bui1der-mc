import { Tick } from "../utilities/tick.model";
import { EntityAbility } from "./entity-ability.model";

export class Minion {

    constructor(public name: string,
                public tag: string,
                public type: string,
                public data: string,
                public abilities: EntityAbility[],
                public spawnMethod: string,
                public spawnTimer: Tick,
                public spawnCount: number) {}

}