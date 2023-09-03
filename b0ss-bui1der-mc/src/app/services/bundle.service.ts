import { Injectable } from "@angular/core";
import { HttpClient, withJsonpSupport } from '@angular/common/http'
import { Bundle } from "../models/bundle.model";
import { Coordinate } from "../utilities/coordinate.model";
import { Minion } from "../models/minion.model";
import { Tick } from "../utilities/tick.model";

@Injectable()
export class BundleService {

    public bundle: Bundle;

    constructor(private httpClient: HttpClient) {
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

    export() {
        const templateDir = 'assets/template/templateBoss1-0-0/';
        const dataDir = templateDir + 'data/genboss/';
        this.httpClient.get(templateDir + 'filelist.json').subscribe((data: any) => {
            const root: FileList = data;
            const mcfuncFiles = this.listFiles(root, 'functions');

            for(let mcfunc of mcfuncFiles) {
                this.formatAndDownloadMcfunc(dataDir + 'functions/' + mcfunc);
            }

            // this.httpClient.get(dataDir + 'functions/' + mcfuncFiles[0], {responseType: 'text'}).subscribe(text => {
            //     let file = new File([text],'test.txt',{type: 'application/octet-stream'});
            //     window.open(window.URL.createObjectURL(file));
            // });
        });
    }

    formatAndDownloadMcfunc(path: string) {
        this.httpClient.get(path, {responseType: 'text'}).subscribe(data => {
            const text = data;

            text.replace(RegExp('--(.+?)--','gmi'), substr => { 
                console.log(substr);
                switch (substr) {
                    case '--BNAME--':
                        return this.bundle.boss.name;
                    case '--BTAG--':
                        return this.bundle.boss.tag;
                    case '--BTAG-MOB--':
                        return this.bundle.boss.type;
                    case '--BTAG-DATA--':
                        return this.bundle.boss.data;
                    case '--LOOT-BOX--':
                        return substr;
                    case '--LOOT-XP-LEVELS--':
                        return substr;
                    case '--XTAG--':
                        return substr;
                    case '--XTAG-MOB--':
                        return substr;
                    case '--XTAG-DATA--':
                        return substr;
                    case '--XTAG-SPAWN-TIMER--':
                        return substr;
                    case '--XTAG-SPAWN-CAP--':
                        return substr;
                    case '--ABIL-X--':
                        return substr;
                    case '--ABIL-X-TIMER--':
                        return substr;
                    case '--EFFECT-X--':
                        return substr;
                    case '--EFFECT-X-RADIUS--':
                        return substr;
                    case '--EFFECT-X-EFFECT--':
                        return substr;
                    case '--EFFECT-X-PARTICLE--':
                        return substr;
                    case '--ARENA-CENTER-X--':
                        return this.bundle.arena.center.x;
                    case '--ARENA-CENTER-Y--':
                        return this.bundle.arena.center.y;
                    case '--ARENA-CENTER-Z--':
                        return this.bundle.arena.center.z;
                    case '--ARENA-RADIUS--':
                        return this.bundle.arena.radius.toString();
                    case '--ARENA-ENTER-X--':
                        return this.bundle.arena.entryPoints[0].x;
                    case '--ARENA-ENTER-Y--':
                        return this.bundle.arena.entryPoints[0].y;
                    case '--ARENA-ENTER-Z--':
                        return this.bundle.arena.entryPoints[0].z;
                    case '--ARENA-ENTER-XR--':
                        return this.bundle.arena.entryPoints[0].yaw.toString();
                    case '--ARENA-ENTER-YR--':
                        return this.bundle.arena.entryPoints[0].pitch.toString();
                    case '--LOBBY-CENTER-X--':
                        return substr;
                    case '--LOBBY-CENTER-Y--':
                        return substr;
                    case '--LOBBY-CENTER-Z--':
                        return substr;
                    case '--LOBBY-RADIUS--':
                        return substr;
                    case '--LOBBY-ENTER-X--':
                        return substr;
                    case '--LOBBY-ENTER-Y--':
                        return substr;
                    case '--LOBBY-ENTER-Z--':
                        return substr;
                    case '--LOBBY-ENTER-XR--':
                        return substr;
                    case '--LOBBY-ENTER-XY--':
                        return substr;
                    case '--ADDINFO--':
                        return substr;
                    default:
                        return substr;
                }
            });

            // const name = path.split('/')[path.split('/').length - 1];
            // let file = new File([text], name, { type: 'application/octet-stream' });
            // window.open(window.URL.createObjectURL(file));
        });
    }

    listFiles(root: FileList, path: string): string[] {
        let currentDir = root;
        let files: string[];

        for(let dir of path.split('/')) {
            for(let folder in currentDir.folders) {
                if(folder === dir) {
                    currentDir = currentDir.folders[folder];
                    break;
                }
            }
        }
        files = currentDir.files;

        return files;
    }

}

interface FileList {
    files: string[],
    folders: FileList[]
}