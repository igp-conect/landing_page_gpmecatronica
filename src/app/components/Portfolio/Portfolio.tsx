"use client";

import { useState } from "react";
import { researchProjects } from ".";
import { AnimatePresence, motion } from "framer-motion";
import { ResearchProjectCard } from "@/components/Portfolio/research-project-card";

const filters = [
  { label: "Todos", value: "*" },
  { label: "Arte", value: "arte" },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredItems =
    activeFilter === "*"
      ? researchProjects
      : researchProjects.filter((item) =>
          item.tags.some((tag) => tag.toLowerCase() == activeFilter),
        );

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Conheça alguns dos nossos projetos de pesquisa</h2>
        <p>
          Explore nossos projetos de pesquisa e saiba um pouco do que está
          acontecendo no GPMecatrônica
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <AnimatePresence>
            {filteredItems.map((props, index) => (
              <motion.div
                key={props.title + index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ResearchProjectCard {...props} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
