import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Close from "../../assets/close.svg";
import Menu from "../../assets/menu.svg";
import "../../styles/header.css";
import "../../styles/utility.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                        <li><a href="#testimonials">Depoimentos</a></li>
                        <li><a href="#pricing">Preços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                <div> {/* Container para os botões de Login e Cadastro */}
                    <ul className="cabeca-direiot">
                        <li><a href="#">Login</a></li> 
                        <li><a href="#" className="btn-primary">Cadastre-se</a></li>
                    </ul>
                </div>

                {/* Menu Mobile */}
                <div className="mobile-menu">
                    {showMobileMenu ? (
                        <div className="mobile-menu-content"> {/* Container para o conteúdo do menu mobile */}
                            <ul> 
                                <li><a href="#">Home</a></li> 
                                <li><a href="#promocoes">Promoções</a></li> 
                                <li><a href="#testimonials">Depoimentos</a></li>
                                <li><a href="#pricing">Preços</a></li>
                                <li><a href="#contact">Contato</a></li> 
                            </ul>
                            <ul className="cabeca-direiot"> {/* Lista para os botões de Login e Cadastro no mobile */}
                                <li><a href="#">Cadastre-se</a></li> 
                                <li><a href="#">Login</a></li> 
                            </ul>
                            <span 
                                onClick={() => setShowMobileMenu(false)}
                                className="btn-wrapper"
                                aria-label="Fechar menu"
                            >
                                <img src={Close} alt="ícone fechar menu" width={24} height={24} /> 
                            </span>
                        </div>
                    ) : (
                        <span 
                            onClick={() => setShowMobileMenu(true)} // Define a função para abrir o menu mobile
                            className="btn-wrapper" 
                            aria-label="Abrir menu" 
                        >
                            <img src={Menu} alt="ícone menu" width={24} height={24} /> 
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
}
