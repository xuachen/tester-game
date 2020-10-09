import Drawable from './Drawable'
import Interactive from './Interactive'
const add: any = require('add-two-number');

export default class GameObject implements Drawable, Interactive {
    posX: number;
    posY: number;

    constructor(x: number, y: number) {
        this.posX = x;
        this.posY = y;
    }

    interact(): void {
        console.log("Interacting with GameObject");
        console.log(`Adding two numbers: ${add(this.posX, this.posY)}`);
    }

    draw(): void {
        console.log(`Drawing GameObject at position: ${this.posX} ${this.posY}`);
        console.log('hi, mom!!');
    }
}
