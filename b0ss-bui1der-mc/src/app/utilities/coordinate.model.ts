// class to model MC xyz coordinate system
export class Coordinate {
    public x: string;
    public y: string;
    public z: string;
    
    private _yaw: number;
    public get yaw(): number {
        return this._yaw;
    }
    public set yaw(v: number) {
        if(v < -180) { 
            this._yaw = 179.9; 
        }
        else if(v >= 180) { 
            this._yaw = 180; 
        }
        else { 
            this._yaw = v; 
        }
    }

    
    private _pitch: number;
    public get pitch(): number {
        return this._pitch;
    }
    public set pitch(v: number) {
        if(v > 90) {
            this._pitch = 90;
        }
        else if(v < -90) {
            this._pitch = -90;
        }
        else {
            this._pitch = v
        }
    }

    constructor() {
        this.x = '~';
        this.y = '~';
        this.z = '~';
        this._yaw = 0;
        this._pitch = 0;
    }
    
}