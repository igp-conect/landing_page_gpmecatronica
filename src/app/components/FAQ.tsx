"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "O que é o GPMecatrônica?",
    answer:
      "O GPMecatrônica é um grupo de pesquisa do Instituto Federal de Rondônia que busca fomentar o desenvolvimento de projetos nas áreas de automação, robótica, eletrônica e inovação tecnológica, promovendo a integração entre alunos, professores e a comunidade.",
  },
  {
    question: "Como posso participar do GPMecatrônica?",
    answer:
      "Para participar, você pode entrar em contato com os membros do grupo ou acompanhar os editais de seleção publicados pelo IFRO. Alunos, professores e colaboradores externos com interesse em tecnologia e inovação são bem-vindos.",
  },
  {
    question: "Quais projetos o grupo já desenvolveu?",
    answer:
      "O GPMecatrônica já desenvolveu diversos projetos, incluindo protótipos de robôs para competições, dispositivos de IoT (Internet das Coisas) e websites que buscam solucionar casos de uso diversos. Esses projetos têm como objetivo promover a inovação e solucionar problemas reais.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap  gy-4">
          <div className="lg:w-1/3 pr-4 pl-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="content xl:px-12">
              <h3>
                <span>Perguntas Frequentes </span>
                <strong>FAQ</strong>
              </h3>
              <p>
                Descubra as principais perguntas e respostas sobre o
                GPMecatrônica, nosso trabalho e como você pode colaborar conosco
                em projetos de tecnologia e inovação.
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 pr-4 pl-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="faq-container">
              {faqItems.map((faq, index) => (
                <button
                  type="button"
                  key={faq.question}
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>
                    <span className="num">{index + 1}.</span>{" "}
                    <span>{faq.question}</span>
                  </h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
