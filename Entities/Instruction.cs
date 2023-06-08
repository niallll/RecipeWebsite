using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RankingApp.Entities
{
    public class Instruction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string InstructionText { get; set; }
        [Required]
        public int StepNumber { get; set; }

        [Required]
        public Recipe Recipe { get; set; }
    }
}
