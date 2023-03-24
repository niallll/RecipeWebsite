using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageController : ControllerBase
    {
        private static readonly IEnumerable<ImageModel> Images = new[]
        {
            new ImageModel{Id =1, Title = "a", Url="..\\images\\Burger.png"},
            new ImageModel{Id =2, Title = "c", Url="..\\images\\Burger.png"},
            new ImageModel{Id =3, Title = "d f",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageModel{Id =4, Title = "d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageModel{Id =5, Title = "s d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
            new ImageModel{Id =6, Title = "f d",  Url="C:\\Users\\niall\\Pictures\\Burger-2651550916.png"},
        };

        [HttpGet("{id:int}")]
        public ImageModel[] Get(int id)
        {
            ImageModel[] images = Images.Where(i => i.Id == id).ToArray();
            return images;
        }

        [HttpGet]
        public ImageModel[] Get()
        {
            ImageModel[] images = Images.ToArray();
            return images;
        }
    }
}
