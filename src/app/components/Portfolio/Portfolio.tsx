"use client";

import { useState } from "react";
import { PortfolioItemView } from "./PortfolioItemView"; // adjust path as needed
import { portfolioItems } from ".";
import { AnimatePresence, motion } from "framer-motion";

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
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={item.name + index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioItemView
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  image={{ src: item.image.src, alt: item.image.alt }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
