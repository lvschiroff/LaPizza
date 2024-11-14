import Header from "./header.tsx";
import Button from "../components/button";

import Promocoes from "./Promocoes.tsx";
import AvaliacoesClientes from "../pages/AvaliacoesClientes.tsx";
import PagamentoRetirada from "../pages/PagamentoRetirada.tsx";

export default function Home() {
    return (
        <>
            <Header />

            {/* Seção principal da Home */}
            <section id="hero">
                <div className="container content"> 
                    <div className="hero-text"> 
                        <h1>Venha se deliciar com nossas pizzas artesanais, preparadas com ingredientes frescos e uma receita exclusiva que vai conquistar seu paladar.</h1> 
                        <p>Explore nosso cardápio e encontre a pizza perfeita para cada momento. Pronto para uma explosão de sabores?</p>
                    </div>
                    <div className="botoes-centrais">
                        <span><Button text="Realizar Pedido" /></span>
                        <span className="Cardapio">
                            <Button text="Cardapio"/>
                        </span>
                    </div>
                </div>
            </section>

            {/* Seção Promoções */}
            <section id="promocoes"> 
                <Promocoes />
            </section>

            {/* Seção de Avaliações dos Clientes */}
            <section id="avaliacoes-clientes" className="avaliacoes-section">
                <AvaliacoesClientes/>
            </section>

            {/* Seção de Formas de Pagamento e Retirada */}
            <section id="pagamento-retirada" className="pagamento-retirada-section">
            <PagamentoRetirada />
            </section>
        </>
    );
}
