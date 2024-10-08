import Button from "../components/button"; 
import "../styles/header.css"; 
import "../styles/Solucoes.css"; 
import Logo from "../assets/Logo.svg"; 
import Solucoes from "../pages/Solucoes.tsx";

export default function Home() {
    return (
        <>
            <header>
  <div className="logo-container">
    <img src={Logo} alt="Logo" className="logo" />
  </div>
  
  <nav className="nav-menu">
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#promocoes">Promoções</a></li>
      <li><a href="#">Depoimento</a></li>
      <li><a href="#">Preço</a></li>
      <li><a href="#">Contato</a></li>
    </ul>

    <div className="button-container"> {/* Container para os botões de Login e Cadastro */}
      <ul className="cabeca-direiot">
        <li><a href="#" className="btn-secondary">Login</a></li> 
        <li><a href="#" className="btn-primary">Cadastre-se</a></li>
      </ul>
    </div>
  </nav>
</header>


            {/* Seção principal da Home */}
            <section id="hero">
                <div className="container content"> 
                    <div className="hero-text"> 
                        <h1>Venha se deliciar com nossas pizzas artesanais, preparadas com ingredientes frescos e uma receita exclusiva que vai conquistar seu paladar.</h1> 
                        <p>Explore nosso cardápio e encontre a pizza perfeita para cada momento. Pronto para uma explosão de sabores?</p>
                    </div>
                    <div className="botoes-centrais"> {/* Container para os botões centrais da seção */}
                        <span><Button text="Realizar Pedido" /></span>
                        <span className="Cardapio">
                            <Button text="Cardapio"/>
                        </span>
                    </div>
                </div>
            </section>

            {/* Seção Promoções (antes chamada Soluções) */}
            <section id="promocoes"> 
                <Solucoes />
            </section>
        </>
    );
}
