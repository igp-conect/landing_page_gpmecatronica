type StatItemData = { highlight: string; text: string };

const StatItem = ({ highlight, text }: StatItemData) => (
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
          <strong>{highlight}</strong> <span>{text}</span>
        </p>
      </div>
    </div>
  </div>
);

const statItems: StatItemData[] = [
  {
    highlight: "Happy Clients",
    text: "consequuntur quae",
  },
  {
    highlight: "Projects",
    text: "Texto",
  },
  {
    highlight: "Projects",
    text: "Texto",
  },
  {
    highlight: "Horas de suporte",
    text: "valem tudo",
  },
  { highlight: "Membros", text: "legais" },
];

export const Stats = () => (
  <section id="stats" className="stats section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 align-items-center">
        <div className="col-lg-5">
          <img src="assets/img/stats-img.svg" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-7">
          <div className="row gy-4">
            {statItems.map((props) => (
              <StatItem {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
