import Logo from "../assets/Logo.svg";
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <nav className="nav-menu">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#promocoes">Promoções</a></li>
                    <li><a href="#avaliacoes-clientes">Depoimentos</a></li>
                    <li><a href="#">Preço</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

                <div className="button-container">
                    <ul className="cabeca-direiot">
                        <li><a href="#" className="btn-secondary">Login</a></li>
                        <li><a href="#" className="btn-primary">Cadastre-se</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
