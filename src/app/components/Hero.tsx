"use client";

import { GalleryName } from "@/components/lib/Glightbox";
import Image from "next/image";
import heroImage from "@assets/img/hero.svg";

type IconBoxProps = {
  title: string;
  iconName: string;
};

const HighlightIconBox = ({ title, iconName }: IconBoxProps) => (
  <div className="col-xl-3 col-md-6">
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
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>
              <span>Bem-vindo ao </span>
              <span className="accent">GPMecatrônica</span>
            </h2>
            <p>
              Estamos comprometidos com o avanço da pesquisa e da inovação em
              Mecatrônica. Explore nossas iniciativas e projetos voltados para
              soluções tecnológicas integradas.
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">
                Saiba Mais
              </a>
              <a
                href="https://youtu.be/L2jihcWhsYg"
                className="glightbox btn-watch-video d-flex align-items-center"
                data-gallery={GalleryName.PresentationVideo}
                data-type="video"
              >
                <i className="bi bi-play-circle" />
                <span>Assista ao Vídeo</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <Image src={heroImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div
        className="icon-boxes position-relative"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
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
