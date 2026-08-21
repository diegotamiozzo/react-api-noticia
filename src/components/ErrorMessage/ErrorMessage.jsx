import React from 'react';
import { AlertCircle } from 'lucide-react';
import './ErrorMessage.css';

export default function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <AlertCircle className="error-icon" size={32} />
      <h3>Ocorreu um erro</h3>
      <p>{message || 'Não foi possível carregar as notícias. Tente novamente mais tarde.'}</p>
    </div>
  );
}
