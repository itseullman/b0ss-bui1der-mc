import { EntityAbility } from "./entity-ability.model";

export class Boss {

    constructor(public name: string, 
                public tag: string, 
                public summon: string,
                public abilities: EntityAbility[]) {}

}