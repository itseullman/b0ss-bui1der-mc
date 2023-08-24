import { Tick } from "../utilities/tick.model";

// special event executed at a designated entity
export class EntityAbility {
    constructor(public tag: string,
                public timer: Tick, 
                public actions: AbilityAction[]) {}
}

// command executed at a specified time during an ability trigger
export class AbilityAction {
    constructor(public activationTick: Tick, 
                public command: string, 
                public duration: Tick) {}
}