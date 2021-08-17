/**
 * https://www.samsungsds.com/kr/insights/TypeScript.html
 * 1. build with tsc command
 * 2. transfort code to js
 * 3. run js code.
 * 
 * 필요하긴 하지만, 아직 직접 사용할 일이 없어서 보류..
 */
class Add {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    Display() {
        console.log(this.x, this.y);
    }
}

let add = new Add(1, 2);

let message: string = "Hello World";
add.Display();
console.log(message);
