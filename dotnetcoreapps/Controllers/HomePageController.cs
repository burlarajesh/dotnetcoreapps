using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetcoreapps.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcoreapps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomePageController : ControllerBase
    {
        [HttpGet("GetData")]
        public IList<HomePageEntity> Get()
        {
            List<HomePageEntity> result = new List<HomePageEntity>() {
                new HomePageEntity(){ Topic= new Topic() {Category=TopicCategory.AspCore,CreatedDate=DateTime.Now,Description="What is .net?",Tags= new string[] {".Net","C#" },Title="Introduction on Asp.net" } },
                new HomePageEntity(){ Topic= new Topic() {Category=TopicCategory.Balzor,CreatedDate=DateTime.Now,Description="Introduction on Microserives?",Tags= new string[] {".Net","C#" },Title="Introduction on Microserives" } },
                new HomePageEntity(){ Topic= new Topic() {Category=TopicCategory.Dotnet,CreatedDate=DateTime.Now,Description="What is ReactJs?",Tags= new string[] {".Net","C#" },Title="Introduction on ReactJs" } },               
            };
            return result;
        }
    }
}