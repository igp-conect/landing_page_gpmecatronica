export function Footer() {
  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        { label: "Home", href: "#" },
        { label: "About us", href: "#" },
        { label: "Services", href: "#" },
        { label: "Terms of service", href: "#" },
        { label: "Privacy policy", href: "#" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Web Design", href: "#" },
        { label: "Web Development", href: "#" },
        { label: "Product Management", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Graphic Design", href: "#" },
      ],
    },
  ];

  const contactInfo = {
    address: "A108 Adam Street",
    city: "New York, NY 535022",
    country: "United States",
    phone: "+1 5589 55488 55",
    email: "info@example.com",
  };

  return (
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
              {["twitter-x", "facebook", "instagram", "linkedin"].map(
                (icon) => (
                  <a href="" key={icon}>
                    <i className={`bi bi-${icon}`} />
                  </a>
                ),
              )}
            </div>
          </div>
          {footerLinks.map(({ title, links }) => (
            <div className="col-lg-2 col-6 footer-links" key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.city}</p>
            <p>{contactInfo.country}</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>{contactInfo.phone}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contactInfo.email}</span>
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
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
          Distributed by <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </footer>
  );
}
