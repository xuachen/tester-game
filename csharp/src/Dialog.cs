using System;

namespace game
{
    class Dialog: Interactive
    {
        public Dialog(): base(){}

        // An interaction
        public void interact()
        {
            Console.WriteLine("Interacting with dialog");
        }
    }
}