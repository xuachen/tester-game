package game;

class GameObject implements Interactive, Drawable
{
    int posX, posY;

    GameObject(int x, int y)
    {
        posX = x;
        posY = y;
    }

    public void interact()
    {
        System.out.println("Interacting with GameObject");
    }

    public void draw()
    {
        System.out.println("Drawing GameObject at position: " + posX + ", " + posY);
    }
}