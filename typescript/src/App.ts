import Interactive from './Interactive'
import GameObject from './GameObject'
import Dialog from './Dialog'

class App {
    // TRIGGER ME PLS
    main(): void {
        let block: Interactive = new GameObject(10, 10);
        block.interact();

        let dialog: Interactive = new Dialog();
        dialog.interact();
    }
}

const app: App = new App();
app.main();