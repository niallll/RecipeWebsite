using System.ComponentModel.DataAnnotations;

namespace RankingApp.DataSets
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Amount { get; set; }

        [Required]
        public Recipe Recipe { get; set; }
    }
}
