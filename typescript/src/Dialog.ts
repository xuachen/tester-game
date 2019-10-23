import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Hopeful this time 😇
        console.log("Interacting with dialog");
    }
}