import GameObject from './GameObject'

export default class Block extends GameObject {
    constructor(x: number, y: number) {
        super(x, y);
    }

    interact(): void {
        console.log('You get a coin, you rock star!');
    }
}
