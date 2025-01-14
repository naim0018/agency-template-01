import Image from 'next/image';

const Blog = () => {
  const posts = [
    {
      date: "15 Mar 2024",
      image: "https://i.imgur.com/zFQ6SnG.jpg", 
      title: "10 Essential Web Development Best Practices for Better Performance",
      description: "Learn key optimization techniques and coding standards that will help you build faster, more maintainable web applications."
    },
    {
      date: "12 Mar 2024",
      image: "https://i.imgur.com/43KBAGD.png",
      title: "The Complete Guide to Modern Frontend Architecture",
      description: "Explore modern frontend architectures like micro-frontends, JAMstack, and server components to build scalable applications."
    },
    {
      date: "8 Mar 2024",
      image: "https://i.imgur.com/QafGkXu.png",
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      description: "Deep dive into TypeScript's advanced features including generics, utility types, and decorators with practical examples."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-semibold text-[#282938]">Our blog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="group">
            <div className="relative h-[200px] md:h-[285px] mb-8 overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="text-[#282938]/70 mb-4">{post.date}</p>
            <h3 className="text-2xl font-medium text-[#282938] mb-4 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-[#282938]/70 mb-6 line-clamp-2">
              {post.description}
            </p>
            <a href="#" className="text-[#282938] flex items-center gap-2 hover:gap-4 transition-all">
              Read More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;