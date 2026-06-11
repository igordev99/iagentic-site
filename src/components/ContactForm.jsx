import React, { useState } from 'react';

export default function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFullname('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        
        <div className="section-header" style={{ margin: '0 auto 40px auto', textAlign: 'center', maxWidth: '640px' }}>
          <p className="label-orange" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--cyan)', fontWeight: 700, marginBottom: '8px' }}>
            FALE CONOSCO
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: 800, textTransform: 'uppercase' }}>Essa é a sua próxima <em>Escala.</em></h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Redefina seus limites digitais hoje. Nossa equipe de engenheiros está pronta para desenhar a sua solução customizada.
          </p>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Seu Nome</label>
              <input
                type="text"
                id="fullname"
                placeholder="Nome Sobrenome"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Corporativo</label>
              <input
                type="email"
                id="email"
                placeholder="voce@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto / Necessidade</label>
            <select
              id="subject"
              className="styled-select"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              disabled={status === 'sending'}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <option value="" disabled>Selecione uma opção...</option>
              <option value="Hospedagem Premium">Hospedagem Premium</option>
              <option value="Infraestrutura de Email">Infraestrutura de Email</option>
              <option value="Agentes de IA">Agentes de IA</option>
              <option value="Parceria White-Label">Parceria White-Label</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Como podemos acelerar seu negócio?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={status === 'sending'}
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="btn-cyan btn-full"
            style={{
              background: status === 'sent' ? '#69D81B' : '',
              color: status === 'sent' ? '#fff' : '',
              opacity: status === 'sending' ? 0.7 : 1,
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'idle' && 'Enviar Solicitação'}
            {status === 'sending' && 'Enviando...'}
            {status === 'sent' && 'Mensagem Enviada! ✓'}
          </button>
        </form>

        <div className="contact-direct-info">
          Ou nos envie um e-mail direto em: <a href="mailto:comercial@iagentic.com.br">comercial@iagentic.com.br</a>
        </div>
      </div>
    </section>
  );
}
