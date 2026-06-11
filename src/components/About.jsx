import React, { useEffect, useState } from 'react';

export default function About() {
  const [stats, setStats] = useState({ reliability: 0, businesses: 0 });

  useEffect(() => {
    // Simple count animation for stats on mount
    let startReliability = 0;
    let startBusinesses = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const relStep = 24 / steps;
    const busStep = 500 / steps;

    const timer = setInterval(() => {
      startReliability += relStep;
      startBusinesses += busStep;

      if (startReliability >= 24) {
        clearInterval(timer);
        setStats({ reliability: 24, businesses: 500 });
      } else {
        setStats({
          reliability: Math.floor(startReliability),
          businesses: Math.floor(startBusinesses)
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-text">
            <h2>A sua parceira em Tecnologia e Infraestrutura Elite</h2>
            <p>
              Nós acreditamos que a tecnologia não deve ser uma barreira, mas sim o motor principal que impulsiona seu negócio.
              Desenvolvemos soluções completas para quem quer crescer sem preocupações.
            </p>
            <p>
              Desde servidores rápidos e protegidos contra ataques até chatbots inteligentes que vendem e atendimento automático 24h.
            </p>
          </div>
        </div>
      </section>

      <section id="stats">
        <div className="container">
          <h2 className="stats-title">Nada grandioso é feito sozinho</h2>
          <p className="stats-subtitle">
            Nosso compromisso com resultados excepcionais para nossos clientes começa com uma equipe dedicada e apaixonada.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-val">
                <span className="stat-number">{stats.reliability}</span>
                <span className="stat-plus">+</span>
              </div>
              <p className="stat-label">Confiabilidade (SLA)</p>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                <span className="stat-number-text">100TB</span>
              </div>
              <p className="stat-label">De dados processados</p>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                <span className="stat-number">{stats.businesses}</span>
                <span className="stat-plus">+</span>
              </div>
              <p className="stat-label">Negócios Transformados</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
