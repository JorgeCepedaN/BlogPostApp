
using System.Text.Json;
using webapi.Application.Blogs.Interfaces;
using webapi.Domain.Entities;

namespace webapi.Application.Blogs.Services
{
    public class BlogService : IBlogService
    {
        public BlogService(IWebHostEnvironment env)
        {
            WebHostEnvironment = env;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string JsonFileName => Path.Combine(WebHostEnvironment.ContentRootPath, "Data", "blogs.json");

        public Task CreateBlog(Blog blog)
        {
            try
            {
                var posts = GetAllPosts();

                int maxId = posts.Any() ? posts.Max(post => post.Id) : 0;

                blog.Id = maxId + 1;

                posts.Add(blog);

                using (var outputStream = File.Create(JsonFileName))
                {
                    JsonSerializer.Serialize<IEnumerable<Blog>>(
                        new Utf8JsonWriter(outputStream, new JsonWriterOptions
                        {
                            SkipValidation = true,
                            Indented = true
                        }),
                        posts
                    );
                }

                return Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw new Exception("Error while creating blog", ex);
            }
        }


        public Task DeleteBlog(int blogId)
        {
            try
            {
                var posts = GetAllPosts();

                var postToDelete = posts.Where(p => p.Id == blogId).FirstOrDefault() ?? throw new Exception();

                posts.Remove(postToDelete);

                using (var outputStream = File.Create(JsonFileName))
                {
                    JsonSerializer.Serialize<IEnumerable<Blog>>(
                        new Utf8JsonWriter(outputStream, new JsonWriterOptions
                        {
                            SkipValidation = true,
                            Indented = true
                        }),
                        posts
                    );
                }

                return Task.CompletedTask;
            }
            catch
            {
                throw new Exception("Error while deteling blog");
            }

        }

        public List<Blog> GetAllPosts()
        {
            try
            {
                using (var jsonFileReader = File.OpenText(JsonFileName))
                {
                    var posts = JsonSerializer.Deserialize<List<Blog>>(jsonFileReader.ReadToEnd(),
                        new JsonSerializerOptions
                        {
                            PropertyNameCaseInsensitive = true
                        });

                    return posts ?? throw new Exception("Invalid Posts");
                }
            }
            catch (FileNotFoundException)
            {
                return new List<Blog>();
            }
            catch (Exception ex)
            {
                throw new Exception("Error while retrieving posts", ex);
            }
        }

        public Task LikeBlog(int blogId)
        {
            try
            {
                var posts = GetAllPosts();

                var postToUpdate = posts?.FirstOrDefault(post => post.Id == blogId);

                if (postToUpdate != null)
                {
                    postToUpdate.Likes++;

                    using (var outputStream = File.OpenWrite(JsonFileName))
                    {
                        JsonSerializer.Serialize<IEnumerable<Blog>>(
                            new Utf8JsonWriter(outputStream, new JsonWriterOptions
                            {
                                SkipValidation = true,
                                Indented = true
                            }),
                            posts
                        );
                    }
                }
                else
                {
                    throw new Exception($"Blog with ID {blogId} not found.");
                }

                return Task.CompletedTask;
            }
            catch (Exception ex)
            {
                throw new Exception("Error while Liking the blog selected", ex);
            }
        }

        public Blog ViewBlog(int blogId)
        {
            try
            {
                var posts = GetAllPosts();

                var postToView = posts.FirstOrDefault(post => post.Id == blogId);

                return postToView ?? throw new Exception();
            }
            catch
            {
                throw new Exception("Error while retreaving info of the post");
            }

        }

        public Task EditBlog(Blog blog)
        {
            try
            {
                var posts = GetAllPosts();

                var postToUpdate = posts.FirstOrDefault(post => post.Id == blog.Id);

                if (postToUpdate != null)
                {
                    posts.First(post => post.Id == blog.Id).Title = blog.Title;
                    posts.First(post => post.Id == blog.Id).Categories = blog.Categories;
                    posts.First(post => post.Id == blog.Id).Content = blog.Content;
                }

                using (var outputStream = File.OpenWrite(JsonFileName))
                {
                    JsonSerializer.Serialize<IEnumerable<Blog>>(
                        new Utf8JsonWriter(outputStream, new JsonWriterOptions
                        {
                            SkipValidation = true,
                            Indented = true
                        }),
                        posts
                    );
                }

                return Task.CompletedTask;
            }
            catch
            {
                throw new Exception("Error while updating blog");
            }
        }
    }
}