using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private static readonly IEnumerable<RecipeModel> Items = new[]
        {
            new RecipeModel{Id =1, Title = "The Godfather", ImageId=1, Time=30, Calories=500 },
            new RecipeModel{Id =2, Title = "Highlander", ImageId=2, Time=70, Calories=300 },
            new RecipeModel{Id =3, Title = "Highlander II", ImageId=3, Time=15, Calories=700 },
            new RecipeModel{Id =4, Title = "The Last of the Mohicans", ImageId=4, Time=60, Calories=500 },
            new RecipeModel{Id =5, Title = "Police Academy 6", ImageId=5, Time=80, Calories=100 },
            new RecipeModel{Id =6, Title = "Rear Window", ImageId=6, Time=100, Calories=1000 }
        };

        [HttpGet("{time:int}")]
        public RecipeModel[] Get(int time)
        {
            RecipeModel[] items = Items.Where(i => i.Time <= time).ToArray();
            return items;
        }
    }
}
