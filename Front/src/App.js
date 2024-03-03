//Imports biblioteca
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Imports componentes

//Imports views
import ListaJogo from './views/ListaJogo';
import CadastroJogo from './views/CadastroJogo';

//Imports css
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <h1>Jogoteca</h1>
      </header>
        <Routes >
          <Route path="/" element={<ListaJogo />} />
          <Route path="/cadastroJogos" element={<CadastroJogo/>} />
          {/* Outras rotas... */}
        </Routes >
      </div>
    </Router>
  );
}

export default App;
