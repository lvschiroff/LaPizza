import Header from "../pages/header";
import Avaliacoes from "../pages/Avaliacoes";
import About from "../pages/About";
import Promo from "../pages/Promo";
import Contato from "../pages/Contato";
import Footer from "../pages/Footer";
import "../styles/index.css";


const Home = () => {
  return (
    <main>

            {/* Adiciona o Header */}
            <Header />
      
      <section className="hero">
        <h1>Bem-vindo à Nossa Pizzaria</h1>
        <p>As melhores pizzas da cidade, feitas com amor e ingredientes frescos.</p>
        <button>Peça Agora</button>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre">
        <About />
      </section>
      {/* Seção de Avaliações */}
      <Avaliacoes />

      {/* Seção de Promoções */}
      <Promo />

      {/* Seção de Contato */}
      <section id="Contato">
      <Contato />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
