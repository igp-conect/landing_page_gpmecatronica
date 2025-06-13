import { PortfolioItem } from ".";

export const PortfolioItemView = ({
  name,
  description,
  image,
}: PortfolioItem) => (
  <div className="col-lg-4 col-md-6 portfolio-item">
    <div className="portfolio-content h-100">
      <a
        href={image.src}
        data-gallery="portfolio-gallery-app"
        className="glightbox"
      >
        <img src={image.src} className="img-fluid" alt={image.alt} />
      </a>
      <div className="portfolio-info">
        <h4>
          <a href="portfolio-details.html" title="More Details">
            {name}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);
