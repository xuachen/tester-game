import Drawable from './Drawable'
import Interactive from './Interactive'

export default class GameObject implements Drawable, Interactive {
    posX: number;
    posY: number;

    constructor(x: number, y: number) {
        console.log('In a constructor!');
        this.posX = x;
        this.posY = y;
    }

    interact(): void {
        console.log("Interacting with GameObject");
        console.log("GameObject says hi!");
    }

    draw(): void {
        console.log(`Drawing GameObject at position: ${this.posX} ${this.posY}`);
        console.log('It is drawn!');
    }
}
