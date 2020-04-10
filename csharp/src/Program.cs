using System;

namespace game
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Testing Rich Code Nav");
            Interactive block = new GameObject(10, 10);
            block.interact();
        }
    }
}
