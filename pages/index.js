import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Appbody />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <p>Agenda</p>
      <p>Profissionais</p>
      <p>Clientes</p>
      <p>Serviços</p>
      <p>Relatórios</p>
    </div>
  );
}

function Appbody() {
  return <h1>Essa é a sua agenda descomplicada para o dia a dia!</h1>;
}

function Footer() {
  return (
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
}
