import React from 'react';
import "./index.css";


export default function Home () {
    return(
        <div>
            <Header />
            <Appbody />
            <Footer />
        </div>
        
    );
};

const Header = () => {
    return (
      <header>
        <nav className="flex items-center">
          <a href="/" className="text-white">Home</a>
          <a href="/agenda" className="text-white">Agenda</a>
          <a href="/profissionais" className="text-white">Profissionais</a>
          <a href="/clientes" className="text-white">Clientes</a>
          <a href="/servicos" className="text-white">Serviços</a>
          <a href="/relatorios" className="text-white">Relatórios</a>
        </nav>
      </header>
    );
};  

function Appbody () {

    return(
        <h1>Essa é a sua agenda descomplicada para o dia a dia!</h1>
    );
};

const Footer = () => {
    return (
      <header className="flex justify-between items-center py-4 px-4 bg-gray-800">
        <nav className="flex items-center">
          <a href="/" className="text-white">Home</a>
          <a href="/agenda" className="text-white">Agenda</a>
          <a href="/profissionais" className="text-white">Profissionais</a>
          <a href="/clientes" className="text-white">Clientes</a>
          <a href="/servicos" className="text-white">Serviços</a>
          <a href="/relatorios" className="text-white">Relatórios</a>
          <a href="/acessibilidade" className="text-white">Acessibilidade</a>
          <a href="/ajuda" className="text-white">Ajuda</a>
          <a href="/fale conosco" className="text-white">Fale conosco</a>
        </nav>
      </header>
    );
};  