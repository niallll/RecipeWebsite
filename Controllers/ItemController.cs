using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemDto> Items = new[]
        {
            new ItemDto{Id =1, Title = "The Godfather", ImageId=1, Ranking=0,ItemType=1 },
            new ItemDto{Id =2, Title = "Highlander", ImageId=2, Ranking=0,ItemType=1 },
            new ItemDto{Id =3, Title = "Highlander II", ImageId=3, Ranking=0,ItemType=1 },
            new ItemDto{Id =4, Title = "The Last of the Mohicans", ImageId=4, Ranking=0,ItemType=1 },
            new ItemDto{Id =5, Title = "Police Academy 6", ImageId=5, Ranking=0,ItemType=1 },
            new ItemDto{Id =6, Title = "Rear Window", ImageId=6, Ranking=0,ItemType=1 },
            new ItemDto{Id =7, Title = "Road House", ImageId=7, Ranking=0,ItemType=1 },
            new ItemDto{Id =8, Title = "The Shawshank Redemption", ImageId=8, Ranking=0,ItemType=1 },
            new ItemDto{Id =9, Title = "Star Treck IV", ImageId=9, Ranking=0,ItemType=1 },
            new ItemDto{Id =10, Title = "Superman 4", ImageId=10, Ranking=0,ItemType=1 },
            new ItemDto{Id = 11, Title = "Abbey Road", ImageId=11, Ranking=0,ItemType=2 },
            new ItemDto{Id = 12, Title = "Adrenalize", ImageId=12, Ranking=0,ItemType=2 },
            new ItemDto{Id = 13, Title = "Back in Black", ImageId=13, Ranking=0,ItemType=2 },
            new ItemDto{Id = 14, Title = "Enjoy the Silence", ImageId=14, Ranking=0,ItemType=2 },
            new ItemDto{Id = 15, Title = "Parachutes", ImageId=15, Ranking=0,ItemType=2 },
            new ItemDto{Id = 16, Title = "Ride the Lightning", ImageId=16, Ranking=0,ItemType=2 },
            new ItemDto{Id = 17, Title = "Rock or Bust", ImageId=17, Ranking=0,ItemType=2 },
            new ItemDto{Id = 18, Title = "Rust in Peace", ImageId=18, Ranking=0,ItemType=2 },
            new ItemDto{Id = 19, Title = "St. Anger", ImageId=19, Ranking=0,ItemType=2 },
            new ItemDto{Id = 20, Title = "The Final Countdown", ImageId=20, Ranking=0,ItemType=2 }

        };

        [HttpGet("{itemType:int}")]
        public ItemDto[] Get(int itemType)
        {
            ItemDto[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }
}
