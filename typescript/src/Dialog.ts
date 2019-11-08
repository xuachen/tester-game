import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // PROD release 🎉
        console.log("Interacting with dialog");
    }
}