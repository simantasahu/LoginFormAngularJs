using LoginFormAngularJs.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LoginFormAngularJs.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Login()
        {
            ViewBag.Message = "Login page.";

            return View();
        }
        [HttpPost]
        public ActionResult VerifyUser(UserModel obj)
        {
            //DatabaseEntities db = new DatabaseEntities();
            //var user = db.Users.Where(x => x.Email.Equals(obj.Email) && x.Password.Equals(obj.Password)).FirstOrDefault();
            var user = false;
            if (obj.Email == "simantasahu@gmail.com" && obj.Password == "Simanta")
            {
                user = true;
            }
            else
            {
                user = false;
            }
            return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        [HttpPost]
        public ActionResult VerifyUser1(UserModel obj)
        {
            //DatabaseEntities db = new DatabaseEntities();
            //var user = db.Users.Where(x => x.Email.Equals(obj.Email) && x.Password.Equals(obj.Password)).FirstOrDefault();
            var user = false;
            if (obj.Email == "simantasahu@gmail.com" && obj.Password == "Simanta")
            {
                user = true;                
            }
            else
            {
                user = false;
            }
            return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public ActionResult CheckFromDB(UserModel obj)
        {
            DataTable dt = new DataTable();
            //string strConString = @"Data Source=WELCOME-PC\SQLSERVER2008;Initial Catalog=MyDB;Integrated Security=True";
            string strConString = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
            using (SqlConnection con = new SqlConnection(strConString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("Select count(*) Nos from tblUserMaster", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            String JsonStr = JsonConvert.SerializeObject(dt);
            return new JsonResult { Data = JsonStr, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}