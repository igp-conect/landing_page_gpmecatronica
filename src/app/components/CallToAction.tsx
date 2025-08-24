"use client";

import { GalleryName, openGlightboxVideo } from "@/components/lib/Glightbox";
import Image from "next/image";

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container mx-auto sm:px-4">
        <Image
          src="https://portal.ifro.edu.br/images/Jornalismo/Jornalismo-2025/03-Marco-2025/18-03/Ifro_Calama.jpeg"
          alt="Imagem aérea do IFRO Campus Porto Velho Calama"
          width={1600}
          height={900}
        />
        <div
          className="content flex flex-wrap  justify-center"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="xl:w-4/5 pr-4 pl-4">
            <div className="text-center">
              <button
                type="button"
                className="play-btn"
                onClick={(e) =>
                  openGlightboxVideo(e, GalleryName.PresentationVideo)
                }
              >
                <span className="sr-only">Assistir vídeo de apresentação</span>
              </button>
              <h3>Junte-se ao GPMecatrônica</h3>
              <p>
                Faça parte do Grupo de Pesquisa GPMecatrônica do IFRO, onde
                exploramos soluções inovadoras em robótica, mecatrônica e
                tecnologia da informação para transformar o futuro.
              </p>
              <button type="button" className="cta-btn">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
