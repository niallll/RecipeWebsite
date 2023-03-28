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

        [HttpGet("{id:int}")]
        public RecipeModel[] Get(int id)
        {
            using (var db = new MyDbContext())
            {
                // Retrieve all MyEntities with LINQ
                List<RecipeModel> result = new() { };
                RecipeDataSet[]? recipes = db.Recipes?.Where(i => i.Id == id).ToArray();
                recipes ??= Array.Empty<RecipeDataSet>();
                foreach (RecipeDataSet recipe in recipes)
                {
                    RecipeModel a = new()
                    { 
                        Id=recipe.Id, 
                        Title=recipe.Title, 
                        Calories=recipe.Calories, 
                        Description=recipe.Description, 
                        ImageId=recipe.ImageId, 
                        Time=recipe.Time
                    };

                    InstructionDataSet[]? instructions = db.Instructions?.Where(i => i.RecipeId == id).ToArray();
                    instructions ??= Array.Empty<InstructionDataSet>();
                    List<string> individualInstruction = new() { };
                    foreach(InstructionDataSet instruction in instructions){
                        individualInstruction.Add(instruction.InstructionText);
                    }
                    a.Instructions = individualInstruction;


                    IngredientDataSet[]? ingredients = db.Ingredients?.Where(i => i.RecipeId == id).ToArray();
                    ingredients ??= Array.Empty<IngredientDataSet>();
                    List<string> individualIngredient = new() { };
                    foreach (IngredientDataSet ingredient in ingredients)
                    {
                        individualIngredient.Add($"{ingredient.Amount} {ingredient.Name}");
                    }
                    a.Ingredients = individualIngredient;

                    a.Ingredients = (a.Ingredients.Count == 0) ? Ingredients[0].ToList() : a.Ingredients;
                    a.Instructions = (a.Instructions.Count == 0) ? Instructions[0].ToList() : a.Instructions;

                    result.Add(a);
                }
                return result.ToArray();
            }
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
        }
    }
}
