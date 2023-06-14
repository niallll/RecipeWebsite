using AutoMapper;

namespace RankingApp.Profiles
{
    public class InstructionProfile : Profile
    {
        public InstructionProfile()
        {
            CreateMap<Entities.Instruction, Models.InstructionDto>();
            CreateMap<Models.InstructionDto, Models.InstructionForCreationDto>();
            CreateMap<Models.InstructionForCreationDto, Entities.Instruction>();
        }
    }
}
