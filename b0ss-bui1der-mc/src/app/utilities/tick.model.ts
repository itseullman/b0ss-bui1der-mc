export class Tick {
    // ticks per second
    public static tps: number = 20;

    constructor(private _ticks: number) { _ticks = Math.round(_ticks); }
    
    public get ticks() : number {
        return this._ticks;
    }
    public set ticks(v : number) {
        this._ticks = Math.round(v);
    }
    
    public get seconds() {
        return Math.round(this._ticks/Tick.tps);
    }
    public set seconds(v: number) {
        this._ticks = Math.round(v)*Tick.tps;
    }

    public get minutes() {
        return Math.round(this._ticks/(Tick.tps*60));
    }
    public set minutes(v: number) {
        this._ticks = Math.round(v)*(Tick.tps*60);
    }
}