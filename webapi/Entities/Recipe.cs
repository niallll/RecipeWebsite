using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RankingApp.Entities
{
    public class Recipe
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string? Title { get; set; }
        public int ImageId { get; set; }
        public int Time { get; set; }
        public int Servings { get; set; }
        public int Calories { get; set; }
        public int Fat { get; set; }
        public int Saturates { get; set; }
        public int Sugars { get; set; }
        public int Protein { get; set; }
        public int Carbs { get; set; }
        public string? Description { get; set; }
        public ICollection<Ingredient> Ingredients { get; set; } = null!;
        public ICollection<Instruction> Instructions { get; set; } = null!;
        public string? ImageName { get; set; }
        public bool IsArchived { get; set; } = false;
    }
}
