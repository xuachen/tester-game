import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Keep trying
        console.log("Interacting with dialog");
    }
}