namespace RankingApp.DataSets
{
    public class Recipe
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int ImageId { get; set; }
        public int Time { get; set; }
        public int Calories { get; set; }
        public string? Description { get; set; }
        public ICollection<Ingredient>? Ingredients { get; set; }
        public ICollection<Instruction>? Instructions { get; set; }
    }
}
