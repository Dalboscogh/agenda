import React from 'react';

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
      <header className="flex justify-between items-center py-4 px-4 bg-gray-800">
        <h1 className="text-white">My App</h1>
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

function Footer () {
    return(
        <div>
            <p>Agenda</p>
            <p>Profissionais</p>
            <p>Clientes</p>
            <p>Serviços</p>
            <p>Relatórios</p>
            <p>Acessibilidade</p>
            <p>Ajuda</p>
            <p>Fale conosco</p>
        </div>
    );
};