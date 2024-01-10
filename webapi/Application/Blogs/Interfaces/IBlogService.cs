using webapi.Domain.Entities;

namespace webapi.Application.Blogs.Interfaces
{
    public interface IBlogService
    {
        List<Blog> GetAllPosts();
        Blog ViewBlog(int blogId);
        Task CreateBlog(Blog blog);
        Task DeleteBlog(int blogId);
        Task EditBlog(Blog blog);
        Task LikeBlog(int blogId);
    }
}
