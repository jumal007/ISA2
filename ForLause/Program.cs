using System;

namespace ForLause
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
        class Car
        {
            public string Make { get; set; }
            public string Model { get; set; }
            public int Year { get; set; }
            public string Color { get; set; }

            
            public Car()
            {
                // You could load from a configuration file,
                // a database, etc.
                Make = "Nissan";
            }

            public Car(string make, string model, int year, string color)
            {
                Make = make;
                Model = model;
                Year = year;
                Color = color;
            }
            

            public static void MyMethod()
            {
                Console.WriteLine("Called the static MyMethod");
                Console.WriteLine(Make);
            }

        }
    }
}
