export function Services() {
  const services = [
    {
      icon: "bi bi-activity",
      title: "Automação e Controle",
      description:
        "Desenvolvemos soluções para sistemas de automação e controle, promovendo eficiência e precisão em processos industriais.",
    },
    {
      icon: "bi bi-broadcast",
      title: "Sistemas Embarcados",
      description:
        "Projetamos sistemas embarcados inovadores para aplicações em robótica, IoT e dispositivos inteligentes.",
    },
    {
      icon: "bi bi-calendar4-week",
      title: "Integração de Sistemas",
      description:
        "Integrando hardware e software, criamos sistemas completos e funcionais para diversas aplicações tecnológicas.",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Nossos Serviços</h2>
        <p>
          Descubra as soluções do GPMecatrônica em robótica, mecatrônica e
          tecnologia da informação, promovendo a inovação e o desenvolvimento
          tecnológico.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
