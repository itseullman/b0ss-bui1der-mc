import { Injectable } from "@angular/core";
import { Bundle } from "../models/bundle.model";
import { Coordinate } from "../utilities/coordinate.model";

@Injectable()
export class BundleService {

    private bundle: Bundle;

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
                summon: '',
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

}