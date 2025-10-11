import avatarAnderson from "@assets/img/team/anderson.jpg";
import avatarCamila from "@assets/img/team/camila.png";
import avatarFernando from "@assets/img/team/camila.png";
import avatarDani from "@assets/img/team/dani.jpeg";
import avatarLeandro from "@assets/img/team/leandro.jpg";
import Image, { type StaticImageData } from "next/image";
import { objectEntries } from "ts-extras";

type SocialNetwork =
  | "twitter"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "lattes"
  | "youtube";

type TeamMember = {
  name: string;
  image: StaticImageData;
  socialLinks: {
    [K in SocialNetwork]?: string;
  };
};

function socialLinkToURL(socialNetwork: SocialNetwork, link: string) {
  const baseURL = (() => {
    switch (socialNetwork) {
      case "twitter":
        return "twitter.com";
      case "facebook":
        return "facebook.com";
      case "instagram":
        return "instagram.com";
      case "youtube":
        return "youtube.com";
      case "lattes":
        return "lattes.cnpq.br";
      case "linkedin":
        return "linkedin.com/in";
    }
  })();

  return `https://${baseURL}/${link}`;
}

function PlatformIcon({ socialNetwork }: { socialNetwork: SocialNetwork }) {
  switch (socialNetwork) {
    case "lattes":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="448"
          height="512"
          viewBox="0 0 448 512"
          className="tw:w-6 tw:h-6"
        >
          <title>Lattes</title>
          <path
            fill="currentColor"
            d="M97.872 434.733c-46.338-94.949-73.906-152.29-73.906-153.713c0-2.322 2.831-2 30.672 3.46c48.965 9.614 75.126 12.326 118.735 12.342c57.697.016 104.68-9.122 141.185-27.484c19.311-9.715 30.925-18.327 40.437-29.993c11.716-14.378 15.48-24.28 15.615-40.947c.118-15.852-2.018-24.211-11.19-43.608c-3.63-7.665-6.817-16.463-7.122-19.55c-.475-4.968-.068-5.68 3.595-6.104c8.003-.948 47.507 37.403 62.055 60.241c25.076 39.386 27.111 81.993 5.884 123.195c-13.04 25.314-27.45 42.828-51.577 62.734c-40.099 33.062-86.708 56.086-151.069 74.635c-34.57 9.97-90.471 22.059-101.984 22.059c-2.44 0-7.02-8.003-21.296-37.283l-.034.015zm12.904-153.121c-45.016-5.832-82.79-10.903-83.96-11.275c-2-.644-9.155-24.516-13.191-43.947c-1.017-4.917-2.51-17.939-3.323-28.958c-3.63-49.17 7.069-83.166 35.74-113.735C94.583 31.985 198.516 25.694 315.777 67.37c20.582 7.325 28.755 12.411 24.975 15.581c-2.797 2.34-21.753 2.306-54.51-.102c-51.204-3.764-90.183 3.357-110.274 20.176c-30.588 25.602-25.924 81.724 13.53 162.682c4.273 8.766 8.58 17.345 9.563 19.09c2.29 4.019.628 7.75-3.357 7.563c-1.697-.081-39.915-4.912-84.929-10.746zm151.016-44.047c-35.928-6.46-68.227-28.74-78.654-54.222c-5.002-12.241-4.765-28.213.576-37.774c4.832-8.648 17.31-18.65 28.484-22.839c18.6-6.968 51.17-4.188 74.907 6.41c22.533 10.055 42.507 27.738 49.932 44.184c9.53 21.109 1.593 44.66-18.82 55.901c-13.531 7.443-39.827 11.326-56.443 8.341z"
          />
        </svg>
      );
    default:
      return <i className={`bi bi-${socialNetwork}`} />;
  }
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Anderson Seixas",
      image: avatarAnderson,
      socialLinks: {
        linkedin: "anderson-seixas",
        lattes: "8801239004144961",
      },
    },
    {
      name: "Daniela Tissuya Silva Toda",
      image: avatarDani,
      socialLinks: {
        instagram: "toda.professora",
        linkedin: "daniela-toda-476818242",
        youtube: "@todaprofessora2778",
        lattes: "0111308357348109",
      },
    },
    {
      name: "Camila Serrão",
      image: avatarCamila,
      socialLinks: {
        linkedin: "camilaserrao",
        instagram: "cml.srr",
        lattes: "2667646017101625",
      },
    },
    {
      name: "Leandro Ferrarezi",
      image: avatarLeandro,
      socialLinks: {
        linkedin: "leoferrarezi",
        youtube: "@leoferrarezi",
        lattes: "3021868094199055",
      },
    },
    {
      name: "Fernando",
      image: avatarFernando,
      socialLinks: {
        lattes: "1331077072228360",
      },
    },
    {
      name: "Sabrina Feliciano",
      image: avatarCamila,
      socialLinks: {
        lattes: "3201836367296620",
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
      <div className="tw:flex tw:justify-center">
        <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:2xl:grid-cols-4 tw:gap-4 tw:justify-items-center tw:max-w-7xl">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="member tw:text-center tw:max-w-xs tw:mx-auto tw:flex tw:flex-col tw:h-96">
                <div className="tw:overflow-hidden tw:rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="tw:w-full tw:h-full tw:object-cover"
                  />
                </div>
                <h4 className="tw:mt-4 tw:font-semibold">{member.name}</h4>
                <div className="social tw:mt-2 tw:flex tw:justify-center tw:gap-3">
                  {objectEntries(member.socialLinks).map(([platform, link]) => {
                    return (
                      <a
                        key={platform}
                        href={socialLinkToURL(platform, link)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlatformIcon socialNetwork={platform} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
