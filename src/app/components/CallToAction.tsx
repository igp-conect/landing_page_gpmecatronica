export function CallToAction() {
  return (
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
                    <h3>Junte-se ao GPMecatrônica</h3>
                            <p>
                              Faça parte do Grupo de Pesquisa GPMecatrônica do IFRO, onde exploramos soluções inovadoras em robótica, mecatrônica e tecnologia da informação para transformar o futuro.
                            </p>
                            <a className="cta-btn" href="#">
                              Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

