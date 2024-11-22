import React, { useState } from "react";
import "../styles/sobre.css";

const Sobre = () => {
  const slides = [
    {
      title: "Ingredientes Frescos",
      description: "Garantimos a melhor qualidade em todos os ingredientes utilizados.",
    },
    {
      title: "Receitas Tradicionais",
      description: "Nosso cardápio é inspirado na autêntica culinária italiana.",
    },
    {
      title: "Ambiente Aconchegante",
      description: "Venha desfrutar de um espaço acolhedor para toda a família.",
    },
    {
      title: "Atendimento de Qualidade",
      description: "Estamos sempre prontos para servir você com um sorriso.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="sobre">
      {/* Texto da seção Sobre Nós */}
      <div className="sobre-container">
        <h2>Sobre Nós</h2>
        <p>
          Nossa pizzaria nasceu do amor por oferecer a melhor experiência culinária.
          Usamos ingredientes frescos e um toque especial em cada receita.
        </p>
        <p>
          Venha nos visitar e descubra porque somos a pizzaria favorita da cidade!
        </p>
      </div>

      {/* Carrossel Adicionado */}
      <div className="carrossel">
        <div className="carrossel-content">
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div className="carrossel-controls">
          <button onClick={handlePrevious}>&lt; Anterior</button>
          <button onClick={handleNext}>Próximo &gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
