import React from 'react';
import './jogo.css';

const Jogo = ({ jogo }) => (
  <div className="jogo-card">
    <div className="jogo-info">
      <h3>{jogo.nome}</h3>
      <p>Categoria: {jogo.categoria}</p>
      <p>Console: {jogo.console}</p>
    </div>
  </div>
);

export default Jogo;
