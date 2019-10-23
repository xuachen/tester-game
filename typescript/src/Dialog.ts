import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Did we trigger the bug? 🐛
        console.log("Interacting with dialog");
    }
}