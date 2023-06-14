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
    [Route("api/[controller]")]
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
        public async Task<IActionResult> CreateRecipe(RecipeForCreationDto recipeModel)
        {
            try
            {
                RecipeForCreationDto createRecipe = recipeModel;
                Recipe finalRecipe = _mapper.Map<Recipe>(createRecipe);
                _recipeRepository.AddRecipe(finalRecipe);

                await _recipeRepository.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> ReplaceRecipe(int id, RecipeForCreationDto recipeModel)
        {
            if (!await _recipeRepository.RecipeExists(id))
            {
                return NotFound();
            }

            var RecipeEntity = await _recipeRepository.GetRecipeAsync(id);
            if (RecipeEntity == null)
            {
                return NotFound();
            }

            _mapper.Map(recipeModel, RecipeEntity);

            await _recipeRepository.SaveChangesAsync();

            return NoContent();
        }
    }
}
