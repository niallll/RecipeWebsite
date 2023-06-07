using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RankingApp.Controllers
{
    [Route("api/photo")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        // GET: api/<PhotoController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PhotoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PhotoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PhotoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return BadRequest("No photo uploaded");
                }

                var fileExtension = Path.GetExtension(file.FileName);
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png" }; // Define the allowed file extensions

                if (!Array.Exists(allowedExtensions, ext => ext.Equals(fileExtension, StringComparison.OrdinalIgnoreCase)))
                {
                    return BadRequest("Invalid file format. Only JPG, JPEG, and PNG files are allowed.");
                }

                var uniqueFileName = Guid.NewGuid().ToString() + fileExtension;
                var filePath = Path.Combine("path_to_save_photos", uniqueFileName); // Replace "path_to_save_photos" with the actual directory where you want to save the photos

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok("Photo uploaded successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }

        // DELETE api/<PhotoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
