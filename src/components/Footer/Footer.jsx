import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logoImg} alt="Logo Portal de Notícias" className="footer-logo-img" />
            <span>Portal de Notícias</span>
          </div>
          <p className="footer-desc">
            Seu portal de notícias diário atualizado em tempo real com as principais informações do Brasil e do mundo.
          </p>
        </div>

        <div className="footer-col">
          <h4>Categorias</h4>
          <ul>
            <li><Link to="/category/technology">Tecnologia</Link></li>
            <li><Link to="/category/business">Negócios</Link></li>
            <li><Link to="/category/science">Ciência</Link></li>
            <li><Link to="/category/sports">Esportes</Link></li>
            <li><Link to="/category/entertainment">Entretenimento</Link></li>
            <li><Link to="/category/health">Saúde</Link></li>
            <li><Link to="/category/world">Mundo</Link></li>
            <li><Link to="/category/sports">Esportes</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Informações</h4>
          <ul>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#privacidade">Política de Privacidade</a></li>
            <li><a href="#termos">Termos de Uso</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Portal de Notícias. Todos os direitos reservados.</p>
          <p className="api-attribution">Desenvolvido por Diego Tamiozzo</p>
        </div>
      </div>
    </footer>
  );
}

