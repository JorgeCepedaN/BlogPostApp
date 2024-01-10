namespace webapi.Domain.Entities
{
    public class Blog
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Categories { get; set; }
        public string? Summary { get; set; }
        public string? Content { get; set; }
        public int Likes { get; set; }
    }
}
