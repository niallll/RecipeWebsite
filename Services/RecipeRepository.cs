using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using RankingApp.Entities;
using RankingApp.DbContexts;

namespace RankingApp.Services
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly RecipeDbContext context;

        public RecipeRepository(RecipeDbContext context)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<Recipe>> GetAllRecipesAsync()
        {
            return await context.Recipes.Include(r => r.Ingredients).Include(r => r.Instructions).OrderBy(r => r.Title).ToListAsync();
        }

        public async Task<Recipe?> GetRecipeAsync(int id)
        {
             return await context.Recipes.Include(r => r.Ingredients).Include(r => r.Instructions).Where(r => r.Id == id).FirstOrDefaultAsync();
        }


        public void AddRecipe(Recipe recipe)
        {
            context.Recipes.Add(recipe);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await context.SaveChangesAsync() >= 0);
        }

        public async void AddInstructionToRecipeAsync(int id, Instruction instruction)
        {
            var recipe = await GetRecipeAsync(id);
            recipe?.Instructions.Add(instruction);
        }

        public async Task<bool> RecipeExists(int id)
        {
            return await context.Recipes.AnyAsync(r => r.Id == id);
        }

        public async Task<string?> GetRecipeImagePathByIdAsync(int id)
        {
            var rec = await context.Recipes.Where(r => r.Id == id).FirstOrDefaultAsync();
            return rec?.ImageName;
        }
    }
}
