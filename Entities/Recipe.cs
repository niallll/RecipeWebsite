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
        public int Calories { get; set; }
        public int Fat { get; set; }
        public string? Description { get; set; }
        public ICollection<Ingredient> Ingredients { get; set; } = null!;
        public ICollection<Instruction> Instructions { get; set; } = null!;
    }
}
