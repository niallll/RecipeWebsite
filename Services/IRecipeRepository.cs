using RankingApp.Entities;

namespace RankingApp.Services
{
    public interface IRecipeRepository
    {
        Task<IEnumerable<Recipe>> GetAllRecipesAsync();
        Task<Recipe?> GetRecipeAsync(int id);
        void AddRecipe(Recipe recipe);
        void AddInstructionToRecipeAsync(int id, Instruction instruction);
        Task<bool> RecipeExists(int id);
        Task<bool> SaveChangesAsync();
    }
}
