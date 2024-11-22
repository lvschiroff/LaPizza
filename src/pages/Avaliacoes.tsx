import React from "react";
import "../styles/avaliacoes.css"; // Certifique-se de criar este arquivo

const Avaliacoes = () => {
  const avaliacoes = [
    {
      texto: "Ótimo serviço e atendimento impecável!",
      estrelas: 5,
      cliente: "João Silva",
    },
    {
      texto: "A comida estava deliciosa, recomendo muito!",
      estrelas: 4,
      cliente: "Maria Oliveira",
    },
    {
      texto: "Ambiente aconchegante e funcionários muito simpáticos.",
      estrelas: 5,
      cliente: "Lucas Pereira",
    },
  ];

  return (
    <section className="avaliacoes-section">
      <h2>Avaliações de Clientes</h2>
      <p className="avaliacoes-subtitulo">
        Confira o que nossos clientes têm a dizer sobre nós.
      </p>
      <div className="avaliacoes-container">
        {avaliacoes.map((avaliacao, index) => (
          <div className="avaliacao" key={index}>
            <p>{avaliacao.texto}</p>
            <div className="estrelas">
              {"★".repeat(avaliacao.estrelas)}{" "}
              {"☆".repeat(5 - avaliacao.estrelas)}
            </div>
            <span>{avaliacao.cliente}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Avaliacoes;
