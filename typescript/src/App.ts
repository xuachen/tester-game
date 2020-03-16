import Interactive from './Interactive'
import GameObject from './GameObject'
import Dialog from './Dialog'

// Testing prod 🚀
class App {
    main(): void {
        let block: Interactive = new GameObject(10, 10);
        block.interact();

        let dialog: Interactive = new Dialog();
        dialog.interact();
      
        let otherBlock: Interactive = new GameObject(5, 5);
        otherBlock.interact();
    }
}

const app: App = new App();
app.main();
