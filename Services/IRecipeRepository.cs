using RankingApp.DataSets;

namespace RankingApp.Services
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<Recipe>> GetAllRecipesAsync();
        Task<Recipe?> GetRecipeAsync(int id, bool includeIngredientsAndInstructions);
    }
}
