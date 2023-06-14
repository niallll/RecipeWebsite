using AutoMapper;

namespace RankingApp.Profiles
{
    public class RecipeProfile : Profile
    {
        public RecipeProfile()
        {
            CreateMap<Entities.Recipe, Models.RecipeDto>();
            CreateMap<Models.RecipeForCreationDto, Entities.Recipe>();
            CreateMap<Models.RecipeDto, Models.RecipeForCreationDto>();
        }
    }
}
