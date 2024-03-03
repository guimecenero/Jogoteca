import React, { useState, useEffect } from 'react';
import Jogo from '../components/Jogo';
import './ListaJogo.css';

const ListaJogo = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/listaJogos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => setJogos(data.jogos))
      .catch(error => console.error('Erro ao obter jogos:', error));
  }, []);

  return (
    <div className="lista-jogo">
      <main className="jogos-container">
        {jogos.map(jogo => (
          <Jogo key={jogo.nome} jogo={jogo} />
        ))}
      </main>
    </div>
  );
};

export default ListaJogo;
