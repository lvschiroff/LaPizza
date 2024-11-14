import "../styles/pagamentoRetirada.css"

const PagamentoRetirada = () => {
    return (
        <section id="pagamento-retirada" className="pagamento-retirada-section">
            <h2>Escolha a melhor forma de pagamento e retirada</h2>
            <div className="pagamento-retirada-container">
                <div className="campo">
                    <h3>Pagamento Online</h3>
                    <p>Pague de forma segura e prática usando cartões de crédito, débito ou PIX diretamente pelo nosso site.</p>
                </div>
                <div className="campo">
                    <h3>Pagamento na Entrega</h3>
                    <p>Prefere pagar na hora? Aceitamos cartões de crédito, débito e dinheiro diretamente com o entregador.</p>
                </div>
                <div className="campo">
                    <h3>Retirada na Loja</h3>
                    <p>Faça seu pedido online e retire pessoalmente na loja, sem filas e sem espera. Rápido e prático!</p>
                </div>
            </div>
        </section>
    );
};

export default PagamentoRetirada;
