using System;

namespace game
{
    class Dialog: Interactive
    {
        public Dialog(): base(){}

        public void interact()
        {
            Console.WriteLine("Interacting with dialog");
        }
    }
}
