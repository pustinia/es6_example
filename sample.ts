class Add{
    x: number;
    y: number;
    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }
    Display(){
        console.log(this.x, this.y);
    }
}
let add = new Add(1,2);
let message: string = 'Hello World';
add.Display();
console.log(message);
