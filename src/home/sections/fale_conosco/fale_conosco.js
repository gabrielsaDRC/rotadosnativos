import React, { useState } from 'react';

const FaleConosco = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <section className="fale-conosco-section" id="fale-conosco">
      <h2 className="fale-conosco-initial-title">Contato</h2>
      <h2 className="fale-conosco-title">Fale Conosco</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-item">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
          </div>
          <div className="input-group-item">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} required />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)} required></textarea>
        </div>
        <div className="input-submit-button">
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div className="redes-sociais">
        <a href="https://www.instagram.com/rotadosnativos/" target="_blank" rel="noopener noreferrer">
          <span className="rede-social"><i className="fab fa-instagram"></i> @rotadosnativos</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100063456757888" target="_blank" rel="noopener noreferrer">
          <span className="rede-social"><i className="fab fa-facebook"></i> /rotadosnativos</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=41988780788" target="_blank" rel="noopener noreferrer">
          <span className="rede-social"><i className="fa fa-phone"></i> (84) 98801-6205</span>
        </a>
      </div>
    </section>
  );
};

export default FaleConosco;