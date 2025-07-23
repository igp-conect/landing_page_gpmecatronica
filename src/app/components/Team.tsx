import Image, { StaticImageData } from "next/image";

import avatarAnderson from "@assets/img/team/team-1.jpg";
import avatarDani from "@assets/img/team/team-2.jpg";
import avatarCamila from "@assets/img/team/team-3.jpg";
import avatarFernando from "@assets/img/team/team-4.jpg";

type TeamMember = {
  name: string;
  image: StaticImageData;
  socialLinks: {
    [K in "twitter" | "facebook" | "instagram" | "linkedin"]?: string;
  };
};

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Anderson Seixas",
      image: avatarAnderson,
      socialLinks: {
        twitter: "https://twitter.com/walterwhite",
        facebook: "https://facebook.com/walterwhite",
      },
    },
    {
      name: "Daniela Tissuya Silva Toda",
      image: avatarDani,
      socialLinks: {
        instagram: "https://instagram.com/sarahjhinson",
        linkedin: "https://linkedin.com/in/sarahjhinson",
      },
    },
    {
      name: "Camila",
      image: avatarCamila,
      socialLinks: {
        linkedin: "https://linkedin.com/in/williamanderson",
      },
    },
    {
      name: "Fernando",
      image: avatarFernando,
      socialLinks: {
        twitter: "https://twitter.com/amandajepson",
        instagram: "https://instagram.com/amandajepson",
        linkedin: "https://linkedin.com/in/amandajepson",
      },
    },
    {
      name: "Sabrina Feliciano",
      image: avatarCamila,
      socialLinks: {
        twitter: "https://twitter.com/amandajepson",
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
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-y-4 justify-center max-w-7xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 xl:w-1/4 flex justify-center"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="member text-center">
                <div className="w-64 h-64 overflow-hidden rounded-lg mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mt-4 font-semibold">{member.name}</h4>
                <div className="social mt-2 flex justify-center gap-3">
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
