using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;
using RankingApp.Services;
using System.Collections;
using System.Net;
using System.IO;
using Microsoft.AspNetCore.StaticFiles;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RankingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly IMapper _mapper;

        public PhotoController(IRecipeRepository recipeRepository, IMapper mapper)
        {
            _recipeRepository = recipeRepository ?? throw new ArgumentNullException(nameof(recipeRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        // GET: api/<PhotoController>
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var recipeEntities = new List<string>()
            {
                "asd", "ffafad"
            };

            return Ok(recipeEntities);
        }

        // GET api/<PhotoController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            HttpResponseMessage result = null;
            try
            {
                string? ImagePath = await _recipeRepository.GetRecipeImagePathByIdAsync(id);
                var a = Path.Combine("wwwroot", "images", ImagePath);
                
                if (a == null)
                {
                    return BadRequest();
                }
                if (!System.IO.File.Exists(a))
                {
                    return BadRequest(a);
                };

                byte[] byteArray = System.IO.File.ReadAllBytes(a);

                //Determine the Content Type of the File.
                string contentType = "";
                new FileExtensionContentTypeProvider().TryGetContentType(a, out contentType);
                var result2 = new FileContentResult(byteArray, contentType);
                return Ok(result2);

                //if (file == null)
                //{
                //    result = Request.CreateResponse(HttpStatusCode.Gone);
                //}
                //else
                //{
                //    // sendo file to client
                //    byte[] bytes = Convert.FromBase64String(file.pdfBase64);


                //    result = Request.CreateResponse(HttpStatusCode.OK);
                //    result.Content = new ByteArrayContent(bytes);
                //    result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                //    result.Content.Headers.ContentDisposition.FileName = file.name + ".pdf";
                //}

                //return result;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //return Request.CreateResponse(HttpStatusCode.Gone);
            }
        }

        // POST api/<PhotoController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PhotoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, IFormFile photo)
        {
            try
            {
                if (photo == null || photo.Length == 0)
                {
                    return BadRequest("No photo uploaded");
                }

                var fileExtension = Path.GetExtension(photo.FileName);
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png" }; // Define the allowed file extensions

                if (!Array.Exists(allowedExtensions, ext => ext.Equals(fileExtension, StringComparison.OrdinalIgnoreCase)))
                {
                    return BadRequest("Invalid file format. Only JPG, JPEG, and PNG files are allowed.");
                }

                var uniqueFileName = Guid.NewGuid().ToString() + fileExtension;
                var filePath = Path.Combine("wwwroot", "images", uniqueFileName); // Replace "path_to_save_photos" with the actual directory where you want to save the photos

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await photo.CopyToAsync(stream);
                }

                string? oldImage = await _recipeRepository.GetRecipeImagePathByIdAsync(id);
                _recipeRepository.UpdateImagePathForRecipe(id, uniqueFileName);
                await _recipeRepository.SaveChangesAsync();

                var oldFilePath = Path.Combine("images", oldImage);
                if (System.IO.File.Exists(oldFilePath))
                {
                    System.IO.File.Delete(oldFilePath);
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
