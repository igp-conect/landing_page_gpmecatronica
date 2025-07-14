"use client";

import { GalleryName, openGlightboxVideo } from "@/components/lib/Glightbox";
import Image from "next/image";

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container">
        <Image
          src="https://portal.ifro.edu.br/images/Jornalismo/08-Agosto-2022/02-08/Campus_Calama_-_IFRO.JPG"
          alt="Imagem aérea do IFRO Campus Porto Velho Calama"
        />
        <div
          className="content row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="col-xl-10">
            <div className="text-center">
              <a
                className="play-btn"
                onClick={(e) =>
                  openGlightboxVideo(e, GalleryName.PresentationVideo)
                }
              />
              <h3>Junte-se ao GPMecatrônica</h3>
              <p>
                Faça parte do Grupo de Pesquisa GPMecatrônica do IFRO, onde
                exploramos soluções inovadoras em robótica, mecatrônica e
                tecnologia da informação para transformar o futuro.
              </p>
              <a className="cta-btn" href="#">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
