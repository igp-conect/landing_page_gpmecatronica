import { CONFIG } from "../configuration";

export function Footer() {
  const footerLinks = [
    {
      title: "Links Úteis",
      links: [
        { label: "Início", href: "/#" },
        { label: "Sobre nós", href: "/#" },
        { label: "Serviços", href: "/#" },
        { label: "Termos de serviço", href: "/#" },
        { label: "Política de privacidade", href: "/#" },
      ],
    },
    {
      title: "Nossos Serviços",
      links: [
        { label: "Projetos de Automação", href: "/#" },
        { label: "Desenvolvimento de Sistemas", href: "/#" },
        { label: "Gestão de Projetos", href: "/#" },
      ],
    },
  ];

  const contactInfo = {
    address: "Instituto Federal de Rondônia (IFRO)",
    city: "Campus Calama, RO",
    country: "Brasil",
    phone: CONFIG.phoneNumber,
    email: CONFIG.contactEmail,
  };

  return (
    <footer id="footer" className="footer accent-background">
      <div className="container mx-auto sm:px-4 footer-top">
        <div className="flex flex-wrap  gy-4">
          <div className="lg:w-2/5 pr-4 pl-4 md:w-full pr-4 pl-4 footer-about">
            <a href="/" className="logo flex items-center">
              <span className="sitename">GPMecatrônica</span>
            </a>
            <p>
              O Grupo de Pesquisa em Mecatrônica do IFRO Campus Calama atua no
              desenvolvimento de soluções inovadoras em automação e tecnologia,
              promovendo a integração de conhecimento técnico e científico.
            </p>
            <div className="social-links flex mt-4">
              {["twitter-x", "facebook", "instagram", "linkedin"].map(
                (icon) => (
                  <a href="/#" key={icon}>
                    <i className={`bi bi-${icon}`} />
                  </a>
                ),
              )}
            </div>
          </div>
          {footerLinks.map(({ title, links }) => (
            <div className="lg:w-1/5 pr-4 pl-4 w-1/2 footer-links" key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:w-1/4 pr-4 pl-4 md:w-full pr-4 pl-4 footer-contact text-center text-md-start">
            <h4>Entre em Contato</h4>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.city}</p>
            <p>{contactInfo.country}</p>
            <p className="mt-4">
              <strong>Telefone:</strong> <span>{contactInfo.phone}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contactInfo.email}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">GPMecatrônica</strong>{" "}
          <span>Todos os Direitos Reservados</span>
        </p>
        <div className="credits">
          Desenvolvido pela Equipe Vingadores do GPMecatrônica.
        </div>
      </div>
    </footer>
  );
}
