import Image from "next/image";

export function RecentPosts() {
  const posts = [
    {
      imgSrc: "assets/img/blog/blog-1.jpg",
      category: "Politics",
      title: "Dolorum optio tempore voluptas dignissimos",
      link: "blog-details.html",
      authorImg: "assets/img/blog/blog-author.jpg",
      authorName: "Maria Doe",
      date: { dateTime: "2022-01-01", displayDate: "Jan 1, 2022" },
    },
    {
      imgSrc: "assets/img/blog/blog-2.jpg",
      category: "Sports",
      title: "Nisi magni odit consequatur autem nulla dolorem",
      link: "blog-details.html",
      authorImg: "assets/img/blog/blog-author-2.jpg",
      authorName: "Allisa Mayer",
      date: { dateTime: "2022-01-01", displayDate: "Jun 5, 2022" },
    },
    {
      imgSrc: "assets/img/blog/blog-3.jpg",
      category: "Entertainment",
      title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      link: "blog-details.html",
      authorImg: "assets/img/blog/blog-author-3.jpg",
      authorName: "Mark Dower",
      date: { dateTime: "2022-01-01", displayDate: "Jun 22, 2022" },
    },
  ];

  return (
    <section id="recent-posts" className="recent-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Últimos Artigos</h2>
        <p>
          Confira os artigos mais recentes publicados pelos membros do
          GPMecatrônica, abordando temas inovadores em tecnologia e pesquisa.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div
              key={post.title}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <article>
                <div className="post-img">
                  <Image src={post.imgSrc} alt="" className="img-fluid" />
                </div>
                <p className="post-category">{post.category}</p>
                <h2 className="title">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <div className="d-flex align-items-center">
                  <Image
                    src={post.authorImg}
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">{post.authorName}</p>
                    <p className="post-date">
                      <time dateTime={post.date.dateTime}>
                        {post.date.displayDate}
                      </time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
