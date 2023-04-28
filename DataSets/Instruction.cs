using System.ComponentModel.DataAnnotations;

namespace RankingApp.DataSets
{
    public class Instruction
    {
        public int Id { get; set; }
        public int StepNumber { get; set; }
        public string InstructionText { get; set; }

        [Required]
        public Recipe Recipe { get; set; }
    }
}
