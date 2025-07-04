export const About = () => {
  const aboutPhrases = [
    "Desenvolvimento de projetos inovadores em automação e robótica.",
    "Parcerias com empresas e instituições para soluções tecnológicas.",
    "Formação de estudantes e pesquisadores qualificados para o mercado de trabalho.",
  ];

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          Sobre Nós
          <br />
        </h2>
        <p>
          Conheça o Grupo de Pesquisa em Mecatrônica do IFRO, dedicado a
          soluções inovadoras e tecnologias avançadas.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3>Promovendo inovação e excelência em Mecatrônica</h3>
            <img
              src="assets/img/about.jpg"
              className="img-fluid rounded-4 mb-4"
              alt="Imagem sobre o GPMecatrônica"
            />
            <p>
              O GPMecatrônica busca integrar conhecimentos de mecânica,
              eletrônica e computação para o desenvolvimento de projetos
              inovadores. Nossa equipe trabalha com dedicação para criar
              soluções que atendam às demandas da indústria e da sociedade.
            </p>
            <p>
              Estamos comprometidos em contribuir para o avanço tecnológico e a
              formação de profissionais qualificados. Com projetos que variam de
              automação industrial a robótica, sempre buscamos excelência e
              impacto positivo em nossos resultados.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={250}>
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                "Transformando ideias em realidade através da inovação e
                pesquisa aplicada."
              </p>
              <ul>
                {aboutPhrases.map((phrase, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle-fill" />{" "}
                    <span>{phrase}</span>
                  </li>
                ))}
              </ul>
              <p>
                No GPMecatrônica, acreditamos que a pesquisa aplicada é a chave
                para resolver desafios reais. Trabalhamos para fomentar o
                conhecimento, promover a inovação e contribuir para o
                desenvolvimento sustentável.
              </p>
              <div className="position-relative mt-4">
                <img
                  src="assets/img/about-2.jpg"
                  className="img-fluid rounded-4"
                  alt="Imagem de projeto do GPMecatrônica"
                />
                <a
                  href="https://youtu.be/L2jihcWhsYg"
                  className="glightbox pulsating-play-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
