using Microsoft.AspNetCore.Mvc;
using RankingApp.DataSets;
using RankingApp.Models;
using System.Diagnostics;
using System.Xml;

namespace RankingApp.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private static readonly string[][] Instructions = new string[][] {
            new string[] { "put in bowl", "cook"},
            new string[] { "cut", "cut more", "fry", "oven cook" },
            new string[] { "slice", "green up", "fry", "yellow it out" }
        };

        private static readonly string[][] Ingredients = new string[][] {
            new string[] { "apple", "banana", "cherry" },
            new string[] { "dog", "cat", "fish" },
            new string[] { "red", "green", "blue", "yellow" }
        };

        private static readonly IEnumerable<RecipeModel> Items = new[]
        {
            new RecipeModel{Id =1, Title = "Spagetti", ImageId=1, Time=30, Calories=500, Description="Some delisous spagetti to eat", Instructions=Instructions[0], Ingredients=Ingredients[0] },
            new RecipeModel{Id =2, Title = "Burger", ImageId=2, Time=70, Calories=300, Description="Some delisous spagetti to eat", Instructions=Instructions[1], Ingredients=Ingredients[1]  },
            new RecipeModel{Id =3, Title = "Cheese sandwich", ImageId=3, Time=15, Calories=700, Description="Some delisous spagetti to eat", Instructions=Instructions[2], Ingredients=Ingredients[0]  },
            new RecipeModel{Id =4, Title = "Pizza", ImageId=4, Time=60, Calories=500, Description="Some delisous spagetti to eat", Instructions=Instructions[0], Ingredients=Ingredients[1]  },
            new RecipeModel{Id =5, Title = "Chicken Curry", ImageId=5, Time=80, Calories=100, Description="Some delisous spagetti to eat", Instructions=Instructions[2], Ingredients=Ingredients[2]  },
            new RecipeModel{Id =6, Title = "Hot Dogs", ImageId=6, Time=100, Calories=1000, Description="Some delisous spagetti to eat", Instructions=Instructions[1], Ingredients=Ingredients[2]  }
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
            using (var db = new MyDbContext())
            {
                // Retrieve all MyEntities with LINQ
                List<RecipeModel> result = new List<RecipeModel> { };
                RecipeDataSet[] recipes = db.Recipes.ToArray();
                foreach (RecipeDataSet recipe in db.Recipes)
                {
                    RecipeModel a = new RecipeModel { 
                        Id=recipe.Id, 
                        Title=recipe.Title, 
                        Calories=recipe.Calories, 
                        Description=recipe.Description, 
                        ImageId=recipe.ImageId, 
                        Time=recipe.Time};
                    result.Add(a);
                }
                return result.ToArray();
            }
            //RecipeModel[] items = Items.ToArray();
            //return recipes;
        }
    }
}
