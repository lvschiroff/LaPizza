import Logo from "../assets/Logo.svg";
import "../styles/header.css";
import "../styles/utily.css";

export default function Header() {
    return (
        <header className="header-container">
            <nav className="nav-container">
                {/* Logo */}
                <a href="/" aria-label="Página Inicial" className="logo">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                </a>

                {/* Menu de Navegação Desktop */}
                <div className="desktop-menu">
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#promocoes">Promoções</a></li>
                        <li><a href="#avaliacoes">Depoimentos</a></li>
                        <li><a href="#pricing">Preços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                {/* Container para os botões de Login e Cadastro */}
                <div className="header-buttons">
                    <ul className="cabeca-direiot">
                        <li><a href="#">Login</a></li>
                        <li><a href="#" className="btn-primary">Cadastre-se</a></li>
                    </ul>
                </div>

                {/* Menu Mobile */}
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#promocoes">Promoções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#Contato">Contato</a></li>
                        </ul>
                        <ul className="cabeca-direiot">
                            <li><a href="#">Cadastre-se</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
