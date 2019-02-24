    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
    using imbh.Models;
    using Microsoft.AspNetCore.Mvc;
    

namespace imbh.Controllers
{
    public class TestController : Controller
    {
        public string GetString()
        {
            return "Hello world!";
        }

        public ActionResult GetView()
        {
            Employee emp = new Employee();
            emp.FirstName = "Maria";
            emp.LastName = "Tamm";
            emp.Salary = 3274;
            ViewBag.Employee = emp;
            return View("MyView");

        }

    }
    
}