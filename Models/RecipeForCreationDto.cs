using Microsoft.AspNetCore.Mvc;
using RankingApp.Entities;
using System.ComponentModel.DataAnnotations;

namespace RankingApp.Models
{
    public class RecipeForCreationDto
    {
        [Required]
        [MaxLength(50)]
        public string? Title { get; set; }
        public int Time { get; set; }
        public int Calories { get; set; }
        public string? Description { get; set; }
        //public ICollection<IngredientDto>? Ingredients { get; set; } = new List<IngredientDto>();
        //public ICollection<InstructionDto>? Instructions { get; set; } = new List<InstructionDto>();
    }
}
