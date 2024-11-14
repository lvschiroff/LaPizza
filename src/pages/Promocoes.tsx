// src/pages/solucoes.tsx
import "../styles/Solucoes.css"; // Certifique-se de criar este arquivo CSS
import DuasPizzas from "../assets/images/DuasPizzas.jpg";
import ChatOnImage from "../assets/images/ChatOn image.jpg";
import ComboFamilia from "../assets/images/combo_familia.jpg";

const Solucoes = () => {
    return (
        <section id="solucoes" className="solucoes">
            <div className="container">
                <h2>Promoções Especiais</h2>
                <p>Corra e aproveite nossas promoções, pois são por tempo limitado!</p>
                <div className="cards-container">
                    <div className="card">
                        <img src={DuasPizzas} alt="Produto 1" className="card-image" />
                        <h3>Compre uma, leve duas</h3>
                        <p>Na compra de uma pizza G,<br /> ganhe uma pizza M totalmente gratuita!</p>
                    </div>
                    <div className="card">
                        <img src={ChatOnImage} alt="Produto 2" className="card-image" />
                        <h3>Desconto Imperdível</h3>
                        <p>Ganhe 20% de desconto em qualquer pedido acima de R$ 100,00!</p>
                    </div>
                    <div className="card">
                        <img src={ComboFamilia} alt="Produto 3" className="card-image" />
                        <h3>Combo Família</h3>
                        <p>Compre um combo de 2 pizzas grandes e ganhe uma sobremesa gratuita!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solucoes;
