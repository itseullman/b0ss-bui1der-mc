import { Injectable } from "@angular/core";
import { HttpClient, withJsonpSupport } from '@angular/common/http'
import { Bundle } from "../models/bundle.model";
import { Coordinate } from "../utilities/coordinate.model";
import { Minion } from "../models/minion.model";
import { Tick } from "../utilities/tick.model";
import * as JSZip from "jszip";

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
        const zip = new JSZip();

        this.httpClient.get(templateDir + 'filelist.json').subscribe((data: any) => {
            const root: FileList = data;
            const mcfuncFiles = this.listFiles(root, 'functions');

            for(let mcfuncFile of mcfuncFiles) {
                this.httpClient.get(dataDir + 'functions/' + mcfuncFile, {responseType: 'text'}).subscribe(text => {
                    text = this.formatMcfunctionText(text);
                    zip.file(this.bundle.boss.tag + '/data/functions/' + mcfuncFile, text);

                    if(mcfuncFile === mcfuncFiles[mcfuncFiles.length-1]) {
                        zip.generateAsync({type:'blob'}).then(content => {
                            const objURL = window.URL.createObjectURL(new File([content], 'b0b1' + this.bundle.boss.tag, {type: 'application/zip'}));
                            window.open(objURL);
                            window.URL.revokeObjectURL(objURL);
                        });
                    }
                });
            }
        });
    }

    formatMcfunctionText(text: string): string {
        text = this.formatXVariables(text);
        text = this.formatBaseVariables(text);

        return text;
    }

    formatXVariables(text: string): string {
        let result = '';
        let template = '';
        let copy = false;

        for(let line of text.split('\n')) {
            if(line.includes('### --XTAG-- ###')) {
                copy = true;
            }
            if(copy) {
                template += line + '\n';
            }
            if(line.includes('################')) {
                copy = false;
            }
        }

        for(let min of this.bundle.minions) {
            result += template;
            result = result.replace(RegExp('--(.+?)--','gmi'), substr => {
                console.log(substr);
                switch (substr) {
                    case '--XTAG--':
                        return min.tag;
                    case '--XTAG-MOB--':
                        return min.type;
                    case '--XTAG-DATA--':
                        return min.data;
                    case '--XTAG-SPAWN-TIMER--':
                        return min.spawnTimer.ticks.toString();
                    case '--XTAG-SPAWN-CAP--':
                        return min.spawnCount.toString();
                    default:
                        return substr;
                }
            });
        }

        console.log(result);
        text = text.replace(RegExp('### --XTAG-- ###.+?#{16}','gms'), result);
        console.log(text);
        return text.replace(RegExp('###\s--XTAG--\s###.+?#{16}','gms'), result);
    }

    formatBaseVariables(text: string): string {

        text = text.replace(RegExp('--(.+?)--','gmi'), substr => {
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
                        substr = ''
                        for(let min of this.bundle.minions) {
                            substr += min.tag + ',';
                        }
                        return substr.slice(0, -1);
                    case '--XTAG-MOB--':
                        substr = ''
                        for(let min of this.bundle.minions) {
                            substr += min.type + ',';
                        }
                        return substr.slice(0, -1);
                    case '--XTAG-DATA--':
                        substr = ''
                        for(let min of this.bundle.minions) {
                            substr += min.data + ',';
                        }
                        return substr.slice(0, -1);
                    case '--XTAG-SPAWN-TIMER--':
                        substr = ''
                        for(let min of this.bundle.minions) {
                            substr += min.spawnTimer + ',';
                        }
                        return substr.slice(0, -1);
                    case '--XTAG-SPAWN-CAP--':
                        substr = ''
                        for(let min of this.bundle.minions) {
                            substr += min.spawnCount + ',';
                        }
                        return substr.slice(0, -1);
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

        return text;
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