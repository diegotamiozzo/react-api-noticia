import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { categories } from '../../data/categories';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top container">
        <Link to="/" className="logo"> 
          <img src={logoImg} alt="Logo Portal de Notícias" className="logo-img" />
          <div className="logo-text"> 
            <span className="logo-title">Portal de Notícias</span> 
          </div> 
        </Link>
        <div className="header-search-desktop">
          <SearchBar />
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container nav-container">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
            Início
          </NavLink>
          {categories.slice(0, 8).map((cat) => (
            <NavLink 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setMobileMenuOpen(false)}
            >
              {cat.name}
            </NavLink>
          ))}
          <div className="header-search-mobile">
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
}

