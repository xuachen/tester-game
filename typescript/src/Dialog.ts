import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // A change
        console.log("Interacting with dialog");
    }
}