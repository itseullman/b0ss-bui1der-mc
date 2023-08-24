import { Arena } from "./arena.model";
import { Boss } from "./boss.model";
import { Lobby } from "./lobby.model";
import { Minion } from "./minion.model";
import { Player } from "./player.model";

export class Bundle {

    constructor(public packName: string,
                public packDesc: string,
                public arena: Arena,
                public boss: Boss,
                public lobby: Lobby,
                public minions: Minion[],
                public player: Player) {}

}