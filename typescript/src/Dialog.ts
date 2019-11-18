import Interactive from './Interactive'

export default class Dialog implements Interactive {
    // change
    interact(): void {
        console.log("Interacting with dialog");
    }
}