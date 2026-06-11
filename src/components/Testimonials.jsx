import React from 'react';

export default function Testimonials() {
  const agents = [
    {
      num: '01',
      title: 'Vendas',
      desc: 'Foco em Converter interessados em clientes',
      msg: 'Eu sou treinado para ler e-mails de prospectos, qualificar leads frios e agendar reuniões no seu calendário automaticamente pelo WhatsApp.',
      avatarBg: 'linear-gradient(135deg, #005c29, var(--cyan))'
    },
    {
      num: '02',
      title: 'Atendimento',
      desc: 'Foco em Satisfazer e Reter Clientes',
      msg: 'Fico monitorando seu Instagram e WhatsApp. Resolvo dúvidas rápidas com humanização e fecho carrinhos abandonados 24/7.',
      avatarBg: 'linear-gradient(135deg, #111, #444)'
    },
    {
      num: '03',
      title: 'Social Media',
      desc: 'Foco em Marketing & Viralização',
      msg: 'Pesquiso o mercado, crio textos persuasivos e preparo imagens para suas redes sociais alavancarem resultados.',
      avatarBg: 'linear-gradient(135deg, #ff6b35, #f7c948)'
    }
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-center-title">Conheça seu Novo Squad</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '600px', margin: '-30px auto 60px auto', fontSize: '15px', lineHeight: '1.6' }}>
          Deixe a contratação tradicional no passado. Escale sua empresa com agentes especialistas de Inteligência Artificial trabalhando simultaneamente.
        </p>
        <div className="testimonials-grid">
          {agents.map((agent, idx) => (
            <div key={idx} className="testimonial-card">
              <div style={{ fontSize: '11px', letterSpacing: '1.5px', fontWeight: '700', color: 'var(--cyan)', marginBottom: '16px', textTransform: 'uppercase' }}>
                ✦ AGENTE #{agent.num}
              </div>
              <p>"{agent.msg}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: agent.avatarBg }} />
                <div>
                  <h4>{agent.title}</h4>
                  <span>{agent.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
