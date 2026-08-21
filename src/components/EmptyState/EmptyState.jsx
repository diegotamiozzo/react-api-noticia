import React from 'react';
import { Newspaper } from 'lucide-react';
import './EmptyState.css';

export default function EmptyState({ message }) {
  return (
    <div className="empty-container">
      <Newspaper className="empty-icon" size={48} />
      <h3>Nenhuma notícia encontrada</h3>
      <p>{message || 'Tente buscar por outro termo ou navegar por outra categoria.'}</p>
    </div>
  );
}
