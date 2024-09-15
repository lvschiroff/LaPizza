// src/pages/solucoes.tsx
import React from 'react';
import "../styles/solucoes.css"; // Certifique-se de criar este arquivo CSS

const Solucoes = () => {
    return (
        <section id="solucoes" className="solucoes">
            <div className="container">
                <h2>Promoções Especiais</h2>
                <p>Corra e aproveite nossas pormoções, pois são por tempo limitado!</p>
                <div className="cards-container">
                    <div className="card">
                        <img src="src/assets/images/DuasPizzas.jpg" alt="Produto 1" className="card-image" />
                        <h3>Comrpe uma leve duas</h3>
                        <p>Na compra de uma pizza G,<br /> ganhe uma pizza M totalmente gratuita!</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/images/ChatOn image.jpg" alt="Produto 2" className="card-image" />
                        <h3>Desconto Imperdível</h3>
                        <p>Ganhe 20% de desconto em qualquer pedido acima de R$ 100,00!</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/images/combo_familia.jpg" alt="Produto 3" className="card-image" />
                        <h3>Combo Familia</h3>
                        <p>Compre um combo de 2 pizzas grandes e ganhe uma sobremesa gratuita!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solucoes;
