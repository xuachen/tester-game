public class App 
{
    public static void main( String[] args )
    {
        Interactive block = new GameObject(10,10);
        block.interact();

        Interactive dialog = new Dialog();
        dialog.interact();
    }
}
