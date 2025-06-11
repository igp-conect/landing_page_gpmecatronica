import "../../public/assets/css/main.css";
import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../../public/assets/vendor/swiper/swiper-bundle.min.css";
import { PageHeader } from "@/components/Header";

// import "../../public/assets/vendor/aos/aos.css";
// TODO: Implementar a biblioteca AOS para funcionar com o React.

export default function Home() {
  return (
    <>
      {/* =======================================================
  * Template Name: Impact
  * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
  * Updated: Aug 07 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
      <PageHeader />
      <main className="main">
        {/* Hero Section */}
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
                <img
                  src="assets/img/hero-img.svg"
                  className="img-fluid"
                  alt=""
                />
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
                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-easel" />
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-gem" />
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Sed ut perspiciatis
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Magni Dolores
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
                <div className="col-xl-3 col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-command" />
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                  </div>
                </div>
                {/*End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>
              About Us
              <br />
            </h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3>
                  Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
                  commodo
                </h3>
                <img
                  src="assets/img/about.jpg"
                  className="img-fluid rounded-4 mb-4"
                  alt=""
                />
                <p>
                  Ut fugiat ut sunt quia veniam. Voluptate perferendis
                  perspiciatis quod nisi et. Placeat debitis quia recusandae
                  odit et consequatur voluptatem. Dignissimos pariatur
                  consectetur fugiat voluptas ea.
                </p>
                <p>
                  Temporibus nihil enim deserunt sed ea. Provident sit expedita
                  aut cupiditate nihil vitae quo officia vel. Blanditiis
                  eligendi possimus et in cum. Quidem eos ut sint rem veniam
                  qui. Ut ut repellendus nobis tempore doloribus debitis
                  explicabo similique sit. Accusantium sed ut omnis beatae neque
                  deleniti repellendus.
                </p>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" />{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" />{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" />{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>
                  <div className="position-relative mt-4">
                    <img
                      src="assets/img/about-2.jpg"
                      className="img-fluid rounded-4"
                      alt=""
                    />
                    <a
                      href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                      className="glightbox pulsating-play-btn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}
        {/* Clients Section */}
        <section id="clients" className="clients section">
          <div className="container">
            <div className="swiper init-swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Clients Section */}
        {/* Stats Section */}
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <img
                  src="assets/img/stats-img.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7">
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-emoji-smile flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={232}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Happy Clients</strong>{" "}
                          <span>consequuntur quae</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-journal-richtext flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={521}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Projects</strong>{" "}
                          <span>adipisci atque cum quia aut</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-headset flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={1453}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Hours Of Support</strong>{" "}
                          <span>aut commodi quaerat</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-people flex-shrink-0" />
                      <div>
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={32}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Hard Workers</strong>{" "}
                          <span>rerum asperiores dolor</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Stats Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Stats Section */}
        {/* Call To Action Section */}
        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          <div className="container">
            <img src="assets/img/cta-bg.jpg" alt="" />
            <div
              className="content row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox play-btn"
                  />
                  <h3>Call To Action</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a className="cta-btn" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" />
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" />
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                      </span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                      </span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                      </span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                      </span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* /Testimonials Section */}
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
              {/* End Portfolio Filters */}
              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/app-1.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/app-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          App 1
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/product-1.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/product-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Product 1
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/branding-1.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/branding-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Branding 1
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/books-1.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/books-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Books 1
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/app-2.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/app-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          App 2
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/product-2.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/product-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Product 2
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/branding-2.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/branding-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Branding 2
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/books-2.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/books-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Books 2
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/app-3.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/app-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          App 3
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/product-3.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/product-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Product 3
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/branding-3.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/branding-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Branding 3
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <a
                      href="assets/img/portfolio/books-3.jpg"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/portfolio/books-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details">
                          Books 3
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        {/* /Portfolio Section */}
        {/* Team Section */}
        <section id="team" className="team section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Team</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="member">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="member">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="member">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="member">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}
        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Free Plan</h3>
                  <div className="icon">
                    <i className="bi bi-box" />
                  </div>
                  <h4>
                    <sup>$</sup>0<span> / month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li className="na">
                      <i className="bi bi-x" />{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li className="na">
                      <i className="bi bi-x" />{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item featured">
                  <h3>Business Plan</h3>
                  <div className="icon">
                    <i className="bi bi-rocket" />
                  </div>
                  <h4>
                    <sup>$</sup>29<span> / month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/* End Pricing Item */}
              <div className="col-lg-4">
                <div className="pricing-item">
                  <h3>Developer Plan</h3>
                  <div className="icon">
                    <i className="bi bi-send" />
                  </div>
                  <h4>
                    <sup>$</sup>49<span> / month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Quam adipiscing vitae proin</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nec feugiat nisl pretium</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li>
                      <i className="bi bi-check" />{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/* End Pricing Item */}
            </div>
          </div>
        </section>
        {/* /Pricing Section */}
        {/* Faq Section */}
        <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="content px-xl-5">
                  <h3>
                    <span>Frequently Asked </span>
                    <strong>Questions</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>
                      <span className="num">1.</span>{" "}
                      <span>
                        Non consectetur a erat nam at lectus urna duis?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      <span className="num">2.</span>{" "}
                      <span>
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      <span className="num">3.</span>{" "}
                      <span>
                        Dolor sit amet consectetur adipiscing elit pellentesque?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      <span className="num">4.</span>{" "}
                      <span>
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                  <div className="faq-item">
                    <h3>
                      <span className="num">5.</span>{" "}
                      <span>
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  {/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Section */}
        {/* Recent Posts Section */}
        <section id="recent-posts" className="recent-posts section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Recent Blog Posts</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Dolorum optio tempore voluptas dignissimos
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author.jpg"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Nisi magni odit consequatur autem nulla dolorem
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author-2.jpg"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Possimus soluta ut id suscipit ea ut in quo quia et soluta
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/blog/blog-author-3.jpg"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
            </div>
            {/* End recent posts list */}
          </div>
        </section>
        {/* /Recent Posts Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <i className="bi bi-clock flex-shrink-0" />
                    <div>
                      <h3>Open Hours:</h3>
                      <p>Mon-Sat: 11AM - 23PM</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-8">
                <form
                  method="post"
                  className="php-email-form"
                  data-aos="fade"
                  data-aos-delay={100}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={8}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
      <footer id="footer" className="footer accent-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Impact</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Impact</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </>
  );
}
