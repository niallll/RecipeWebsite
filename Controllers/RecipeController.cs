using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public RecipeModel Get(int id)
        {
            using (var db = new MyDbContext())
            {
                // Retrieve all MyEntities with LINQ
                RecipeModel result = new() { };
                Recipe[] recipes = db.Recipes.Include(recipes => recipes.Instructions).Include(recipes => recipes.Ingredients).Where(i => i.Id == id).ToArray();
                recipes ??= Array.Empty<Recipe>();
                foreach (Recipe recipe in recipes)
                {
                    result.Id = recipe.Id;
                    result.Title = recipe.Title;
                    result.Calories = recipe.Calories;
                    result.Description = recipe.Description;
                    result.ImageId = recipe.ImageId;
                    result.Time = recipe.Time;
                    
                    List<InstructionModel> instructions = new() { };
                    foreach (Instruction i in recipe.Instructions)
                    {
                        InstructionModel instructionModel = new()
                        {
                            Id = i.Id,
                            InstructionText = i.InstructionText,
                            StepNumber = i.StepNumber
                        };
                        instructions.Add(instructionModel);
                    }
                    result.Instructions = instructions;

                    List<IngredientModel> ingredients = new() { };
                    foreach (Ingredient i in recipe.Ingredients)
                    {
                        IngredientModel ingredientModel = new()
                        {
                            Id = i.Id,
                            Name = i.Name,
                            StepNumber = i.StepNumber 
                        };
                        ingredients.Add(ingredientModel);
                    }
                    result.Ingredients = ingredients;

                    return result;
                }
                return result;
            }
        }

        [HttpPost()]
        public async Task<IActionResult> Put(RecipeModel recipeModel)
        {
            using var db = new MyDbContext();

            Recipe a = new()
            {
                Title = recipeModel.Title,
                Calories = recipeModel.Calories,
                Description = recipeModel.Description,
                ImageId = 2,
                Time = recipeModel.Time
            };

            db.Recipes?.Add(a);
            await db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost("{id:int}")]
        public async Task<IActionResult> Put(int id, RecipeModel recipeModel)
        {
            using var db = new MyDbContext();
            Recipe? recipe = db.Recipes?.Where(i => i.Id == id).Include(recipes => recipes.Instructions).Include(recipes => recipes.Ingredients).Where(i => i.Id == id)?.First();
            recipe.Id = id;
            recipe.Title = recipeModel.Title;
            recipe.Calories = recipeModel.Calories;
            recipe.Description = recipeModel.Description;
            recipe.ImageId = 2;
            recipe.Time = recipeModel.Time;

            List<Instruction> instructions = new List<Instruction> { };
            foreach (InstructionModel i in recipeModel.Instructions)
            {
                Instruction instruction = new()
                {
                    InstructionText = i.InstructionText,
                    StepNumber = i.StepNumber,
                    Recipe = recipe,
                };
                if (i.Id != -1) {
                    instruction.Id = i.Id;
                }

                instructions.Add(instruction);
            }
            recipe.Instructions = instructions;

            List<Ingredient> ingredients = new List<Ingredient> { };
            foreach (IngredientModel i in recipeModel.Ingredients)
            {
                Ingredient ingredient = new()
                {
                    Name = i.Name,
                    StepNumber = i.StepNumber,
                    Recipe = recipe,
                };
                if (i.Id != -1)
                {
                    ingredient.Id = i.Id;
                }

                ingredients.Add(ingredient);
            }
            recipe.Ingredients = ingredients;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            
            return NoContent();
        }

        [HttpGet]
        public RecipeModel[] Get()
        {
            using var db = new MyDbContext();
            // Retrieve all MyEntities with LINQ
            List<RecipeModel> result = new() { };
            //Instruction[] instructions = db.Instructions.ToArray();
            Recipe[] recipes = db.Recipes.Include(recipes => recipes.Instructions).Include(recipes => recipes.Ingredients).ToArray();
            foreach (Recipe recipe in db.Recipes)
            {
                RecipeModel a = new()
                {
                    Id = recipe.Id,
                    Title = recipe.Title,
                    Calories = recipe.Calories,
                    Description = recipe.Description,
                    ImageId = recipe.ImageId,
                    Time = recipe.Time
                };
                result.Add(a);
            }
            return result.ToArray();
        }
    }
}
