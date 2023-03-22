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
            new RecipeModel{Id =1, Title = "Spagetti", ImageId=1, Time=30, Calories=500 },
            new RecipeModel{Id =2, Title = "Burger", ImageId=2, Time=70, Calories=300 },
            new RecipeModel{Id =3, Title = "Cheese sandwich", ImageId=3, Time=15, Calories=700 },
            new RecipeModel{Id =4, Title = "Pizza", ImageId=4, Time=60, Calories=500 },
            new RecipeModel{Id =5, Title = "Chicken Curry", ImageId=5, Time=80, Calories=100 },
            new RecipeModel{Id =6, Title = "Hot Dogs", ImageId=6, Time=100, Calories=1000 }
        };

        [HttpGet("{id:int}")]
        public RecipeModel[] Get(int id)
        {
            RecipeModel[] items = Items.Where(i => i.Id == id).ToArray();
            return items;
        }

        [HttpGet]
        public RecipeModel[] Get()
        {
            RecipeModel[] items = Items.ToArray();
            return items;
        }
    }
}
