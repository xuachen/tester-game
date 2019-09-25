import Interactive from './Interactive'

export default class Dialog implements Interactive {
    // An interaction
    interact(): void {
        console.log("Interacting with dialog");
    }
}