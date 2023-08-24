import { EntityAbility } from "./entity-ability.model";

export class Boss {

    constructor(public name: string, 
                public tag: string, 
                public type: string,
                public data: string,
                public abilities: EntityAbility[]) {}

}