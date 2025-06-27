export function Team() {
  const teamMembers = [
    {
      name: "Walter White",
      role: "Web Development",
      image: "assets/img/team/team-1.jpg",
    },
    {
      name: "Sarah Jhinson",
      role: "Marketing",
      image: "assets/img/team/team-2.jpg",
    },
    {
      name: "William Anderson",
      role: "Content",
      image: "assets/img/team/team-3.jpg",
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      image: "assets/img/team/team-4.jpg",
    },
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Nossa Equipe</h2>
        <p>
          Conheça os membros do GPMecatrônica que estão transformando ideias em
          soluções inovadoras nas áreas de robótica e tecnologia.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="member">
                <img
                  src={member.image}
                  className="img-fluid"
                  alt={member.name}
                />
                <h4>{member.name}</h4>
                <span>{member.role}</span>
                <div className="social">
                  {["twitter-x", "facebook", "instagram", "linkedin"].map(
                    (platform, idx) => (
                      <a key={idx} href="">
                        <i className={`bi bi-${platform}`} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
