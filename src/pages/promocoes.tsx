import "../styles/promocoes.css";

const Promocoes = () => {
  const promocoes = [
    { 
      titulo: "Pizza Família", 
      descricao: "Compre 2 e leve 1 grátis!", 
      imagem: "public/combo_familia.jpg" // Substitua com o caminho da imagem
    },
    { 
      titulo: "Pizza Calabresa", 
      descricao: "Desconto de 20% em pedidos às quartas-feiras.", 
      imagem: "public/Calabresa.jpeg" // Substitua com o caminho da imagem
    },
    { 
      titulo: "Combo", 
      descricao: "Pizza média + bebida por apenas R$ 39,90.", 
      imagem: "public/Combo.jpeg" // Substitua com o caminho da imagem
    },
  ];

  return (
    <section className="promocoes">
      <div className="promocoes-container">
        <h2>Nossas Promoções</h2>
        <div className="promocoes-list">
          {promocoes.map((promo, index) => (
            <div key={index} className="promocao">
              <img src={promo.imagem} alt={promo.titulo} className="promocao-imagem" />
              <h3>{promo.titulo}</h3>
              <p>{promo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promocoes;
