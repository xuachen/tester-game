using System;

namespace game
{
    class Dialog: Interactive
    {
        public Dialog(): base(){}

        public void interact()
        {
            // change
            Console.WriteLine("Interacting with dialog");
        }
    }
}