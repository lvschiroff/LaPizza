import "../styles/avaliacoes.css";  // Crie um arquivo CSS separado para as avaliações, se necessário.

const Avaliacoes = () => {
    return (
        <section id="avaliacoes-clientes" className="avaliacoes-section">
            <h2>Veja o que nossos clientes estão dizendo</h2>
            <p className="avaliacoes-subtitulo">
                Aprovado por quem já experimentou e se apaixonou! Confira as avaliações de quem provou nossas pizzas e teve uma experiência única.
            </p>
            <div className="avaliacoes-container">
                <div className="avaliacao">
                    <p>"A pizza é divina! Massa crocante, ingredientes de primeira e um sabor incomparável."</p>
                    <div className="estrelas">★★★★★</div>
                    <span>— Patrícia Oliveira</span>
                </div>
                <div className="avaliacao">
                    <p>"Simplesmente a melhor pizza da cidade! O atendimento também é incrível, volto sempre."</p>
                    <div className="estrelas">★★★★★</div>
                    <span>— Lucas Almeida</span>
                </div>
                <div className="avaliacao">
                    <p>"Recomendo para todos os amigos! A pizza marguerita é sensacional, não tem igual."</p>
                    <div className="estrelas">★★★★☆</div>
                    <span>— Ana Clara</span>
                </div>
            </div>
        </section>
    );
};

export default Avaliacoes;
