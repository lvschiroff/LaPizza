import Header from "../pages/header";
import Avaliacoes from "./Avaliacoes";
import Sobre from "./sobre";
import Promocoes from "../pages/promocoes";
import Contato from "./Contato";
import Footer from "../components/footer"; // Importe o Footer
import "../styles/index.css"; // Se tiver um arquivo CSS específico para a home

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
