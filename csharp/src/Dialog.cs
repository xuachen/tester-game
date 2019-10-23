using System;

namespace game
{
    class Dialog: Interactive
    {
        public Dialog(): base(){}

        public void interact()
        {
            // Wonder if C# works? 🤔
            Console.WriteLine("Interacting with dialog");
        }
    }
}
