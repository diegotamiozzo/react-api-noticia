import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container container">
      <FileQuestion size={64} className="not-found-icon" />
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className="not-found-btn">
        <Home size={18} /> Voltar para o Início
      </Link>
    </div>
  );
}
