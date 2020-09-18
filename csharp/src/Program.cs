using System;

namespace game
{
    class Program
    {
        static void Main(string[] args)
        {
            // comment
            Interactive block = new GameObject(10, 10);
            block.interact();
            block.doAThing();
        }
    }
}
