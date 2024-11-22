import { useState } from "react";
import "../styles/sobre.css";

const Sobre = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="sobre">
      <div className="sobre-container">
        <h2>Sobre Nós</h2>
        <p>
          Nossa pizzaria nasceu do amor por oferecer a melhor experiência culinária.
          Usamos ingredientes frescos e um toque especial em cada receita.
        </p>
        <div className="carrossel">
          <div className="carrossel-content">
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="carrossel-controls">
            <button onClick={handlePrev} aria-label="Slide anterior">❮</button>
            <button onClick={handleNext} aria-label="Próximo slide">❯</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
