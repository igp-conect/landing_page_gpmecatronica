type TeamMember = {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
};

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Walter White",
      role: "Web Development",
      image: "assets/img/team/team-1.jpg",
      socialLinks: {
        twitter: "https://twitter.com/walterwhite",
        facebook: "https://facebook.com/walterwhite",
        instagram: "https://instagram.com/walterwhite",
        linkedin: "https://linkedin.com/in/walterwhite",
      },
    },
    {
      name: "Sarah Jhinson",
      role: "Marketing",
      image: "assets/img/team/team-2.jpg",
      socialLinks: {
        twitter: "https://twitter.com/sarahjhinson",
        facebook: "https://facebook.com/sarahjhinson",
        instagram: "https://instagram.com/sarahjhinson",
        linkedin: "https://linkedin.com/in/sarahjhinson",
      },
    },
    {
      name: "William Anderson",
      role: "Content",
      image: "assets/img/team/team-3.jpg",
      socialLinks: {
        twitter: "https://twitter.com/williamanderson",
        facebook: "https://facebook.com/williamanderson",
        instagram: "https://instagram.com/williamanderson",
        linkedin: "https://linkedin.com/in/williamanderson",
      },
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      image: "assets/img/team/team-4.jpg",
      socialLinks: {
        twitter: "https://twitter.com/amandajepson",
        facebook: "https://facebook.com/amandajepson",
        instagram: "https://instagram.com/amandajepson",
        linkedin: "https://linkedin.com/in/amandajepson",
      },
    },
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Professores Orientadores</h2>
        <p>
          Conheça os professores orientadores do GPMecatrônica que estão
          transformando ideias em soluções inovadoras nas áreas de robótica e
          tecnologia.
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
                  {Object.entries(member.socialLinks).map(
                    ([platform, link], idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
