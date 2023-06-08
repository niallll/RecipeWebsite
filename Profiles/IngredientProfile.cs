using AutoMapper;

namespace RankingApp.Profiles
{
    public class IngredientProfile : Profile
    {
        public IngredientProfile()
        {
            CreateMap<Entities.Ingredient, Models.IngredientDto>();
            CreateMap<Models.IngredientDto, Models.IngredientForCreationDto>();
            CreateMap<Models.IngredientForCreationDto, Entities.Ingredient>();
        }
    }
}
