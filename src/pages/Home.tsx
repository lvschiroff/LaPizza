import Header from "../pages/header";
import Avaliacoes from "../pages/Avaliacoes";
import Sobre from "../pages/Sobre";
import Promocoes from "../pages/Promocoes";
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
      <Sobre />

      {/* Seção de Avaliações */}
      <Avaliacoes />

      {/* Seção de Promoções */}
      <Promocoes />

      {/* Seção de Contato */}
      <Contato />

      <Footer />
    </main>
  );
};

export default Home;
