import { CONFIG } from "../configuration";

export function Contact() {
  const infoItems = [
    {
      icon: "bi-telephone",
      title: "Ligue Para Nós",
      content: CONFIG.phoneNumber,
    },
    {
      icon: "bi-envelope",
      title: "Envie-nos um Email",
      content: CONFIG.contactEmail,
    },
    {
      icon: "bi-clock",
      title: "Horário de Funcionamento:",
      content: "Seg-Sáb: 11h - 23h",
    },
  ];

  const InfoItem = ({
    icon,
    title,
    content,
    delay,
  }: {
    icon: string;
    title: string;
    content: string;
    delay: number;
  }) => (
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`${icon} flex-shrink-0`} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );

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
            <div className="info-container d-flex flex-column align-items-center">
              {infoItems.map((item, index) => (
                <InfoItem
                  key={item.title}
                  icon={`bi ${item.icon}`}
                  title={item.title}
                  content={item.content}
                  delay={(index + 1) * 100}
                />
              ))}
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
