"use client";

import { GalleryName, openGlightboxVideo } from "@/components/lib/Glightbox";
import aboutImage from "@assets/img/about.jpg";
import aboutSecondaryImage from "@assets/img/about-2.jpg";
import Image from "next/image";

export const About = () => {
  const aboutPhrases = [
    "Desenvolvimento de projetos inovadores em automação e robótica.",
    "Parcerias com empresas e instituições para soluções tecnológicas.",
    "Formação de estudantes e pesquisadores qualificados para o mercado de trabalho.",
  ];

  return (
    <section id="about" className="about section">
      <div className="container mx-auto sm:px-4 section-title" data-aos="fade-up">
        <h2>
          Sobre Nós
          <br />
        </h2>
        <p>
          Conheça o Grupo de Pesquisa em Mecatrônica do IFRO, dedicado a
          soluções inovadoras e tecnologias avançadas.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap  gy-4">
          <div className="lg:w-1/2 pr-4 pl-4" data-aos="fade-up" data-aos-delay={100}>
            <h3>Promovendo inovação e excelência em Mecatrônica</h3>
            <Image
              src={aboutImage}
              className="max-w-full h-auto rounded-4 mb-4"
              alt="Imagem sobre o GPMecatrônica"
            />
            <p>
              O GPMecatrônica busca integrar conhecimentos de mecânica,
              eletrônica e computação para o desenvolvimento de projetos
              inovadores. Nossa equipe trabalha com dedicação para criar
              soluções que atendam às demandas da indústria e da sociedade.
            </p>
            <p>
              Estamos comprometidos em contribuir para o avanço tecnológico e a
              formação de profissionais qualificados. Com projetos que variam de
              automação industrial a robótica, sempre buscamos excelência e
              impacto positivo em nossos resultados.
            </p>
          </div>
          <div className="lg:w-1/2 pr-4 pl-4" data-aos="fade-up" data-aos-delay={250}>
            <div className="content ps-0 lg:ps-12">
              <p className="fst-italic">
                &quot;Transformando ideias em realidade através da inovação e
                pesquisa aplicada.&quot;
              </p>
              <ul>
                {aboutPhrases.map((phrase) => (
                  <li key={phrase}>
                    <i className="bi bi-check-circle-fill" />{" "}
                    <span>{phrase}</span>
                  </li>
                ))}
              </ul>
              <p>
                No GPMecatrônica, acreditamos que a pesquisa aplicada é a chave
                para resolver desafios reais. Trabalhamos para fomentar o
                conhecimento, promover a inovação e contribuir para o
                desenvolvimento sustentável.
              </p>
              <div className="relative mt-4">
                <Image
                  src={aboutSecondaryImage}
                  className="max-w-full h-auto rounded-4"
                  alt="Imagem de projeto do GPMecatrônica"
                />
                <button
                  type="button"
                  onClick={(e) =>
                    openGlightboxVideo(e, GalleryName.PresentationVideo)
                  }
                  className="pulsating-play-btn"
                >
                  <span className="sr-only">
                    Assistir vídeo de apresentação
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
