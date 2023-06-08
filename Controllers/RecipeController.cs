using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using RankingApp.Entities;
using RankingApp.DbContexts;
using RankingApp.Models;
using RankingApp.Services;
using System.Diagnostics;
using System.Xml;
using AutoMapper;

namespace RankingApp.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly IMapper _mapper;

        public RecipeController(IRecipeRepository recipeRepository, IMapper mapper)
        {
            _recipeRepository = recipeRepository ?? throw new ArgumentNullException(nameof(recipeRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDto>>> Get()
        {
            var recipeEntities = await _recipeRepository.GetAllRecipesAsync();
            return Ok(_mapper.Map<IEnumerable<RecipeDto>>(recipeEntities));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<RecipeDto>> Get(int id)
        {
            var recipeEntity = await _recipeRepository.GetRecipeAsync(id);
            return Ok(_mapper.Map<RecipeDto>(recipeEntity));
        }

        [HttpPost()]
        public async Task<IActionResult> CreateRecipe(RecipeDto recipeModel)
        {
            try
            {
                RecipeForCreationDto createRecipe = _mapper.Map<RecipeForCreationDto>(recipeModel);
                Recipe finalRecipe = _mapper.Map<Recipe>(createRecipe);
                _recipeRepository.AddRecipe(finalRecipe);

                ICollection<InstructionForCreationDto> listForCreationInstruction = _mapper.Map<ICollection<InstructionForCreationDto>>(recipeModel.Instructions);
                ICollection<Instruction> listInstruction = _mapper.Map<ICollection<Instruction>>(listForCreationInstruction);
                finalRecipe.Instructions = listInstruction;

                ICollection<IngredientForCreationDto> listForCreationIngredient = _mapper.Map<ICollection<IngredientForCreationDto>>(recipeModel.Ingredients);
                ICollection<Ingredient> listIngredient = _mapper.Map<ICollection<Ingredient>>(listForCreationIngredient);
                finalRecipe.Ingredients = listIngredient;

                await _recipeRepository.SaveChangeAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
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
    }
}
