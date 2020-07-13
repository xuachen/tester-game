import Interactive from './Interactive'
import GameObject from './GameObject'

class App {
    main(): void {
        let block: Interactive = new GameObject(10, 10);
        block.interact();

        let otherBlock: Interactive = new GameObject(5, 5);
        otherBlock.interact();
    }
}

const app: App = new App();
app.main();