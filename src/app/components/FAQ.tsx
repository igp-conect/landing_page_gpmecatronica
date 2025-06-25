"use client";

import { useState } from "react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="content px-xl-5">
              <h3>
                <span>Frequently Asked </span>
                <strong>Questions</strong>
              </h3>
              <p>
                Descubra as principais perguntas e respostas sobre o
                GPMecatrônica, nosso trabalho e como você pode colaborar conosco
                em projetos de tecnologia e inovação.
              </p>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
            <div className="faq-container">
              {[
                {
                  question: "O que é o GPMecatrônica do IFRO?",
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
                    "O GPMecatrônica já desenvolveu diversos projetos, incluindo sistemas de automação residencial, protótipos de robôs para competições, dispositivos de IoT (Internet das Coisas) e soluções voltadas para a indústria 4.0. Esses projetos têm como objetivo promover a inovação e solucionar problemas reais.",
                },
                {
                  question: "Como o GPMecatrônica contribui para a comunidade?",
                  answer:
                    "O grupo realiza workshops, palestras e eventos para disseminar conhecimento tecnológico. Além disso, desenvolve projetos que atendem às necessidades locais, contribuindo para a solução de problemas e impulsionando o desenvolvimento regional.",
                },
                {
                  question: "Quais são os próximos passos do GPMecatrônica?",
                  answer:
                    "O grupo planeja expandir suas atividades, buscar parcerias com empresas e outras instituições, além de continuar desenvolvendo projetos inovadores que impactem positivamente a sociedade e o mercado de trabalho. Estamos sempre abertos a novas ideias e colaborações.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
