using RankingApp.Entities;

namespace RankingApp.Models
{
    public class RecipeDto
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int ImageId { get; set; }
        public int Time { get; set; }
        public int Calories { get; set; }
        public string? Description { get; set; }
        public ICollection<IngredientDto>? Ingredients { get; set; } = new List<IngredientDto>();
        public ICollection<InstructionDto>? Instructions { get; set; } = new List<InstructionDto>();
        public string? ImageName { get; set; }
    }
}
