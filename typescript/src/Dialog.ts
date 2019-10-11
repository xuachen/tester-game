import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // A change, again
        console.log("Interacting with dialog");
    }
}