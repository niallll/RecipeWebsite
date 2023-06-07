using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageController : ControllerBase
    {
        private static readonly IEnumerable<ImageDto> Images = new[]
        {
            new ImageDto{Id =1, Title = "a", Url="..\\images\\Burger.png"},
            new ImageDto{Id =2, Title = "c", Url="..\\images\\Burger.png"},
            new ImageDto{Id =3, Title = "d f",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageDto{Id =4, Title = "d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageDto{Id =5, Title = "s d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageDto{Id =6, Title = "f d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
        };

        [HttpGet("{id:int}")]
        public ImageDto[] Get(int id)
        {
            ImageDto[] images = Images.Where(i => i.Id == id).ToArray();
            return images;
        }

        [HttpGet]
        public ImageDto[] Get()
        {
            ImageDto[] images = Images.ToArray();
            return images;
        }
    }
}
