export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>
          Entre em contato com o GPMecatrônica para saber mais sobre nossos
          projetos e como colaborar conosco.
        </p>
      </div>
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
                  <h3>Endereço</h3>
                  <p>A108 Rua Adam, Nova York, NY 535022</p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Ligue Para Nós</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Envie-nos um Email</h3>
                  <p>info@example.com</p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <i className="bi bi-clock flex-shrink-0" />
                <div>
                  <h3>Horário de Funcionamento:</h3>
                  <p>Seg-Sáb: 11h - 23h</p>
                </div>
              </div>
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
                    placeholder="Seu Nome"
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Seu Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Assunto"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={8}
                    placeholder="Mensagem"
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Carregando</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Sua mensagem foi enviada. Obrigado!
                  </div>
                  <button type="submit">Enviar Mensagem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
