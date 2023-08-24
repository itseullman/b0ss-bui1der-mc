import { EntityAbility } from "./entity-ability.model";

export class Player {

    constructor(public tag: string,
                public abilities: EntityAbility[]) {}

}