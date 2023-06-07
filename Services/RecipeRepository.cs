using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using RankingApp.DataSets;
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

        public async Task<Recipe?> GetRecipeAsync(int id, bool includeIngredientsAndInstructions)
        {
            if(includeIngredientsAndInstructions)
            {
                return await context.Recipes.Include(r => r.Ingredients).Include(r => r.Instructions).Where(r => r.Id == id).FirstOrDefaultAsync();
            }
            return await context.Recipes.Where(r => r.Id == id).FirstOrDefaultAsync();
        }
    }
}
