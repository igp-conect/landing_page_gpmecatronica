type IconBoxProps = {
  title: string;
  iconName: string;
};

const HighlightIconBox = ({ title, iconName }: IconBoxProps) => (
  <div className="col-xl-3 col-md-6">
    <div className="icon-box">
      <div className="icon">
        <i className={`bi bi-${iconName}`} />
      </div>
      <h4 className="title">
        <a href="#" className="stretched-link">
          {title}
        </a>
      </h4>
    </div>
  </div>
);

export const Hero = () => (
  <section id="hero" className="hero section accent-background">
    <div
      className="container position-relative"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="row gy-5 justify-content-between">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h2>
            <span>Welcome to </span>
            <span className="accent">Impact</span>
          </h2>
          <p>
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
          <img src="assets/img/hero-img.svg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
    <div
      className="icon-boxes position-relative"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <HighlightIconBox iconName="gem" title="Lorem" />
          <HighlightIconBox iconName="easel" title="Ipsum" />
          <HighlightIconBox iconName="geo-alt" title="Dolor" />
          <HighlightIconBox iconName="command" title="Sit" />
        </div>
      </div>
    </div>
  </section>
);
