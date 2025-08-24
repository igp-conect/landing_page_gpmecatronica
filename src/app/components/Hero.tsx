"use client";

import { GalleryName } from "@/components/lib/Glightbox";
import Image from "next/image";
import heroImage from "@assets/img/hero.svg";

type IconBoxProps = {
  title: string;
  iconName: string;
};

const HighlightIconBox = ({ title, iconName }: IconBoxProps) => (
  <div className="xl:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
    <div className="icon-box">
      <div className="icon">
        <i className={`bi bi-${iconName}`} />
      </div>
      <h4 className="title">
        <div>
          {title}
        </div>
      </h4>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section id="hero" className="hero section accent-background">
      <div
        className="container mx-auto sm:px-4 relative"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="flex flex-wrap  gy-5 justify-between">
          <div className="lg:w-1/2 pr-4 pl-4 order-2 lg:order-1 flex flex-col justify-center">
            <h2>
              <span>Bem-vindo ao </span>
              <span className="accent">GPMecatrônica</span>
            </h2>
            <p>
              Estamos comprometidos com o avanço da pesquisa e da inovação em
              Mecatrônica. Explore nossas iniciativas e projetos voltados para
              soluções tecnológicas integradas.
            </p>
            <div className="flex">
              <a href="#about" className="btn-get-started">
                Saiba Mais
              </a>
              <a
                href="https://youtu.be/L2jihcWhsYg"
                className="glightbox btn-watch-video flex items-center"
                data-gallery={GalleryName.PresentationVideo}
                data-type="video"
              >
                <i className="bi bi-play-circle" />
                <span>Assista ao Vídeo</span>
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 pr-4 pl-4 order-1 lg:order-2">
            <Image src={heroImage} className="max-w-full h-auto" alt="" />
          </div>
        </div>
      </div>
      <div
        className="icon-boxes relative"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="container mx-auto sm:px-4 relative">
          <div className="flex flex-wrap  gy-4 mt-5">
            <HighlightIconBox iconName="lightbulb-fill" title="Inovação" />
            <HighlightIconBox iconName="search" title="Pesquisa" />
            <HighlightIconBox iconName="pc-display" title="Tecnologia" />
            <HighlightIconBox iconName="people-fill" title="Integração" />
          </div>
        </div>
      </div>
    </section>
  );
};
