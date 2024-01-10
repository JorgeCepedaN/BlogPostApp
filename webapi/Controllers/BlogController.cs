using Microsoft.AspNetCore.Mvc;
using webapi.Application.Blogs.Interfaces;
using webapi.Domain.Entities;

namespace BlogPost.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly IBlogService _blogService;
        public BlogController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpPost("AddBlog")]
        public IActionResult AddBlog(Blog blog)
        {
            if (blog == null)
            {
                return BadRequest();
            }
            return Ok(_blogService.CreateBlog(blog));
        }

        [HttpGet("GetAllPosts")]
        public IActionResult GetAllBlogs()
        {
            return Ok(_blogService.GetAllPosts());
        }

        [HttpGet("ViewBlog/{blogId}")]
        public IActionResult GetBlogById(int blogId)
        {
            return Ok(_blogService.ViewBlog(blogId));
        }

        [HttpPut("AddLike/{blogId}")]
        public IActionResult AddLikeToBlog(int blogId)
        {
            return Ok(_blogService.LikeBlog(blogId));
        }

        [HttpPut("ModifyBlog")]
        public IActionResult ModifyBlog(Blog blog)
        {
            if (blog == null)
            {
                return BadRequest();
            }
            return Ok(_blogService.EditBlog(blog));
        }

        [HttpDelete("DeleteBlog/{blogId}")]
        public IActionResult DeleteBlog(int blogId)
        {
            return Ok(_blogService.DeleteBlog(blogId));
        }
    }
}
