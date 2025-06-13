"use client";

import { useState } from "react";
import { portfolioItems } from ".";
import { PortfolioItemView } from "./PortfolioItemView";

const filters = [
  { label: "All", value: "*" },
  { label: "App", value: "app" },
  { label: "Product", value: "product" },
  { label: "Branding", value: "branding" },
  { label: "Books", value: "books" },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <ul
          className="portfolio-filters"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {filters.map((filter) => (
            <li
              key={filter.value}
              className={filter.value === activeFilter ? "filter-active" : ""}
              onClick={() => setActiveFilter(filter.value)}
              style={{ cursor: "pointer" }}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        <div
          className="row gy-4 portfolio-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {filteredItems.map((item, index) => (
            <PortfolioItemView
              key={index}
              name={item.name}
              description={item.description}
              category={item.category}
              image={{ src: item.image.src, alt: item.image.alt }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
