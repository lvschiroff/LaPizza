import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h4>Sobre Nós</h4>
                    <p>
                        Descubra o sabor autêntico da pizza artesanal com ingredientes selecionados e
                        receitas exclusivas.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#promocoes">Promoções</a></li>
                        <li><a href="#avaliacoes-clientes">Avaliações</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Redes Sociais</h4>
                    <div className="social-links">
                        <p>Acompanhe nossas novidades:</p>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Pizzaria Artesanal. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
