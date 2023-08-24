import { Injectable } from "@angular/core";
import { Bundle } from "../models/bundle.model";
import { Coordinate } from "../utilities/coordinate.model";
import { Minion } from "../models/minion.model";
import { Tick } from "../utilities/tick.model";

@Injectable()
export class BundleService {

    public bundle: Bundle;

    constructor() {
        this.bundle = {
            packName: '',
            packDesc: '',
            arena: {
                center: new Coordinate(),
                radius: 0,
                entryPoints: [],
                exitPoints: []
            },
            boss: {
                name: '', 
                tag: '',
                type: '',
                data: '',
                abilities: []
            },
            lobby: {
                center: new Coordinate(),
                radius: 0,
                entryPoints: [],
                exitPoints: [],
                enterArena: []
            },
            minions: [],
            player: {
                tag: '',
                abilities: []
            }
        }
    }

    /**
     * outputBundle
     */
    public outputBundle() {
        console.log(JSON.stringify(this.bundle));
    }

    public getMinion(name: string) : Minion | undefined {
        for(let min of this.bundle.minions) {
            if(min.name === name) {
                return min;
            }
        }
        return undefined;
    }

    addMinion() : Minion {
        const name = this.createValidMinionName();
        const tag = this.createTag(name);
        const min = new Minion(name,tag,'','',[],'',new Tick(0), 0);
        this.bundle.minions.push(min);
        return min;
    }

    deleteMinion(name: string) {
        for(let i in this.bundle.minions) {
            if(this.bundle.minions[i].name === name) {
                this.bundle.minions.splice(+i, 1);
            }
        }
    }

    validateMinionName(name: string) : boolean {
        for(let min of this.bundle.minions) {
            if(min.name === name) {
                return false;
            }
        }
        return true;
    }

    createValidMinionName() : string {
        let count = this.bundle.minions.length;
        let name = 'minion' + count;
        while(!this.validateMinionName(name)) {
            name = 'minion' + ++count;
        }
        return name;
    }

    createTag(name: string) : string {
        return name[0].toLowerCase() + name.slice(1).replaceAll(RegExp('a|e|i|o|u|[^a-z0-9]','gmi'),'');
    }

}