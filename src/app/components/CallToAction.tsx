export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container">
        <img
          src="https://portal.ifro.edu.br/images/Jornalismo/08-Agosto-2022/02-08/Campus_Calama_-_IFRO.JPG"
          alt="Imagem aérea do IFRO Campus Porto Velho Calama"
        />
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
                Faça parte do Grupo de Pesquisa GPMecatrônica do IFRO, onde
                exploramos soluções inovadoras em robótica, mecatrônica e
                tecnologia da informação para transformar o futuro.
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
