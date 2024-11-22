import React, { useState } from 'react';
import "../styles/Contato.css";

const Contato = () => {
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState(""); // Novo estado para o campo de assunto

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleAssuntoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAssunto(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('https://us-central1-atomic-energy-440421-k4.cloudfunctions.net/function-10', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, assunto }), // Inclui o assunto no envio
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                setEmail(""); // Limpa o campo de e-mail após o envio
                setAssunto(""); // Limpa o campo de assunto após o envio
            } else {
                const error = await response.text();
                alert(`Erro ao enviar a mensagem: ${error}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                alert(`Erro ao conectar com o servidor: ${error.message}`);
            } else {
                alert('Erro desconhecido.');
            }
        }
    };

    return (
        <section id="contato" className="contato-section">
            <h2>Entre em Contato</h2>
            <p>Deixe seu e-mail e informe o assunto que deseja tratar:</p>
            <form onSubmit={handleSubmit} className="contato-form">
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="contato-input"
                />
                <textarea
                    placeholder="Digite o assunto"
                    value={assunto}
                    onChange={handleAssuntoChange}
                    required
                    className="contato-textarea" // Nova classe para o estilo do textarea
                />
                <button type="submit" className="contato-button">Enviar</button>
            </form>
        </section>
    );
};

export default Contato;
