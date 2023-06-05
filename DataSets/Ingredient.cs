using System.ComponentModel.DataAnnotations;

namespace RankingApp.DataSets
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StepNumber { get; set; }


        [Required]
        public Recipe Recipe { get; set; }
    }
}
