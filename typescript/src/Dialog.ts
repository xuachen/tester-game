import Interactive from './Interactive'

export default class Dialog implements Interactive {
    interact(): void {
        // Int release, ops mishap trying again
        console.log("Interacting with dialog");
    }
}