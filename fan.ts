enum FanSpeed {
    SLOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
export class Fan{
    
   
    private _speed:FanSpeed = FanSpeed.SLOW;
    private _on: boolean = false;
    private _color: string = 'blue';
    private _radius: number = 5;
    constructor(speed:number,on:boolean,color:string,radius:number){
        this._speed=speed;
        this._on=on;
        this._color=color;
        this._radius=radius;
    }
    get Speed(){
        return this._speed;
    }
    get On(){
        return this._on;
    }
    get Color(){
        return this._color;
    }
    get Radius(){
        return this._radius;
    }
    set Speed(speed){
        this._speed=speed;
    }
    set On(on){
        this._on=on;
    }
    set Color(color){
        this._color=color;
    }
    set Radius(radius){
        this._radius=radius;
    }
    toString(){
        if(this._on==true){
            return `speed: ${this._speed} , color: ${this._color}, radius: ${this._radius}, fan is on`
        }else{
            return `speed: ${this._speed} , color: ${this._color}, radius: ${this._radius}, fan is off`

        }
    }
}

