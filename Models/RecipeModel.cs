using RankingApp.DataSets;

namespace RankingApp.Models
{
    public class RecipeModel
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int ImageId { get; set; }
        public int Time { get; set; }
        public int Calories { get; set; }
        public string? Description { get; set; }
        public List<string>? Ingredients { get; set; }
        public List<string>? Instructions { get; set; }
    }
}
