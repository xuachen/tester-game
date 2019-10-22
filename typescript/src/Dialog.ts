import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Change
        console.log("Interacting with dialog");
    }
}