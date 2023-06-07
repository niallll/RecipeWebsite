using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using RankingApp.DataSets;
using RankingApp.DbContexts;
using RankingApp.Models;
using RankingApp.Services;
using System.Diagnostics;
using System.Xml;

namespace RankingApp.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipeController(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository ?? throw new ArgumentNullException(nameof(recipeRepository));
        }

        [HttpGet("{id:int}")]
        public RecipeDto Get(int id)
        {
            using (var db = new RecipeDbContext())
            {
                // Retrieve all MyEntities with LINQ
                RecipeDto result = new() { };
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
                    
                    List<InstructionDto> instructions = new() { };
                    foreach (Instruction i in recipe.Instructions)
                    {
                        InstructionDto instructionModel = new()
                        {
                            Id = i.Id,
                            InstructionText = i.InstructionText,
                            StepNumber = i.StepNumber
                        };
                        instructions.Add(instructionModel);
                    }
                    result.Instructions = instructions;

                    List<IngredientDto> ingredients = new() { };
                    foreach (Ingredient i in recipe.Ingredients)
                    {
                        IngredientDto ingredientModel = new()
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
        public async Task<IActionResult> Put(RecipeDto recipeModel)
        {
            using var db = new RecipeDbContext();

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
        public async Task<IActionResult> Put(int id, RecipeDto recipeModel)
        {
            using var db = new RecipeDbContext();
            Recipe? recipe = db.Recipes?.Where(i => i.Id == id).Include(recipes => recipes.Instructions).Include(recipes => recipes.Ingredients).Where(i => i.Id == id)?.First();
            recipe.Id = id;
            recipe.Title = recipeModel.Title;
            recipe.Calories = recipeModel.Calories;
            recipe.Description = recipeModel.Description;
            //recipe.ImageId = 2;
            recipe.Time = recipeModel.Time;

            List<Instruction> instructions = new List<Instruction> { };
            foreach (InstructionDto i in recipeModel.Instructions)
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
            foreach (IngredientDto i in recipeModel.Ingredients)
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
        public async Task<ActionResult<IEnumerable<RecipeDto>>> Get()
        {
            var recipeEntities = await _recipeRepository.GetAllRecipesAsync();
            var results = new List<RecipeDto>();
            foreach (var recipeEntity in recipeEntities)
            {
                results.Add(new RecipeDto
                {
                    Id = recipeEntity.Id,
                    Title = recipeEntity.Title,
                    Calories = recipeEntity.Calories,
                    Description = recipeEntity.Description,
                    ImageId = recipeEntity.ImageId,
                    Time = recipeEntity.Time
                });
            }

            return Ok(results);
        }
    }
}
