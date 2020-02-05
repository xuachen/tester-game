import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Trigger build!
        console.log("Interacting with dialog");
    }
}