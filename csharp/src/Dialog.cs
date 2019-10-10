using System;

namespace game
{
    class Dialog: Interactive
    {
        public Dialog(): base(){}

        public void interact()
        {
            // Change
            Console.WriteLine("Interacting with dialog");
        }
    }
}