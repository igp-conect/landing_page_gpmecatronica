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
    <div className="info-item flex" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`${icon} flex-shrink-0`} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="contact section">
      <div className="container mx-auto sm:px-4 section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>
          Entre em contato com o GPMecatrônica para saber mais sobre nossos
          projetos e como colaborar conosco.
        </p>
      </div>
      <div className="container mx-auto sm:px-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="flex flex-wrap  gx-lg-0 gy-4">
          <div className="lg:w-1/3 pr-4 pl-4">
            <div className="info-container flex flex-col items-center">
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
          <div className="lg:w-2/3 pr-4 pl-4">
            <form
              method="post"
              className="php-email-form"
              data-aos="fade"
              data-aos-delay={100}
            >
              <div className="flex flex-wrap  gy-4">
                <div className="md:w-1/2 pr-4 pl-4">
                  <input
                    type="text"
                    name="name"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    placeholder="Seu Nome"
                  />
                </div>
                <div className="md:w-1/2 pr-4 pl-4 ">
                  <input
                    type="email"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="email"
                    placeholder="Seu Email"
                  />
                </div>
                <div className="md:w-full pr-4 pl-4">
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="subject"
                    placeholder="Assunto"
                  />
                </div>
                <div className="md:w-full pr-4 pl-4">
                  <textarea
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    name="message"
                    rows={8}
                    placeholder="Mensagem"
                    defaultValue={""}
                  />
                </div>
                <div className="md:w-full pr-4 pl-4 text-center">
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
