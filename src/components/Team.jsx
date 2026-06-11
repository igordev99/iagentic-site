import React from 'react';

export default function Team() {
  const members = [
    { name: 'Everton Rocha', role: 'Comercial', img: '/images/everton.jpg', size: 'cover', pos: 'center' },
    { name: 'Igor Oliveira', role: 'Especialista em Desenvolvimento', img: '/images/Igor.jpg', size: 'cover', pos: 'center' },
    { name: 'Gustavo Fernandes', role: 'Gestor de Projetos', img: '/images/Gustavo.jpg', size: '85%', pos: 'center 10%', bg: '#fff' },
    { name: 'Samea Fernandes', role: 'Gestora Financeira', img: '/images/samea.jpg', size: 'cover', pos: 'center' }
  ];

  return (
    <section id="team">
      <div className="container">
        <h2 className="section-center-title">Conheça os Membros da Equipe</h2>
        <div className="team-grid">
          {members.map((m, idx) => (
            <div key={idx} className="team-card">
              <div 
                className="team-photo" 
                style={{ 
                  backgroundImage: `url(${m.img})`,
                  backgroundSize: m.size,
                  backgroundPosition: m.pos,
                  backgroundColor: m.bg || 'transparent'
                }}
              />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
