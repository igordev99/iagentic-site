import React, { useState, useEffect } from 'react';

export default function Hero({ navigateTo, setSetupOpen }) {
  // Live stats simulation
  const [leadsCount, setLeadsCount] = useState(142);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [requestFeed, setRequestFeed] = useState([
    { id: 1, text: "Lead qualificado: Everton R. (Comercial)" },
    { id: 2, text: "Mensagem enviada: WhatsApp Business API" },
    { id: 3, text: "E-mail Charlotte Pro enviado" },
  ]);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      // Fluctuating leads
      setLeadsCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      
      // Fluctuating CPU
      setCpuUsage(prev => {
        const next = prev + (Math.random() > 0.5 ? 2 : -2);
        return Math.max(8, Math.min(20, next));
      });
    }, 3000);

    const logInterval = setInterval(() => {
      // Insert new log
      const logs = [
        "Nova consulta: Cal.com agendada",
        "Conexão Supabase Auth: OK",
        "Charlotte SDR: Lead frio qualificado",
        "Uptime Check: node-worker-1",
        "SMTP Webmail: Charlotte redigiu rascunho",
        "Database: Sincronização MCP ativa",
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setRequestFeed(prev => [
        { id: Date.now(), text: randomLog },
        ...prev.slice(0, 2),
      ]);
    }, 4500);

    return () => {
      clearInterval(statsInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="container">
        <div className="hero-layout">
          
          {/* Left Column - Copy */}
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Hosting Elite & IA Integrada
            </div>
            <h1>CONSTRUA<br /><em>SEM LIMITES.</em></h1>
            <p className="hero-sub">
              Hospedagem de elite, Agentes de IA e infraestrutura premium para empresas que buscam performance real. Simplificamos a complexidade técnica para você escalar seu negócio de forma autônoma.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-cyan" 
                onClick={() => setSetupOpen(true)}
              >
                COMEÇAR AGORA <span>&rarr;</span>
              </button>
              <a 
                href="#features" 
                className="btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('features');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saber Mais
              </a>
            </div>
          </div>

          {/* Right Column - Dashboard Showcase (Interactive Cockpit) */}
          <div className="dashboard-showcase">
            
            {/* Row 1 - SDR Agente */}
            <div className="showcase-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Agentes de SDR Inteligentes</h4>
                <div className="status-indicator">
                  <span className="pulse-dot"></span>
                  Online
                </div>
              </div>
              <div className="showcase-card-stats">
                <div className="showcase-stat-item">
                  <span>Precisão Operacional</span>
                  <span>98.4%</span>
                </div>
                <div className="showcase-stat-item">
                  <span>Taxa de Leads/Hora</span>
                  <span>{leadsCount}</span>
                </div>
                <div className="showcase-stat-item">
                  <span>Tempo de Trabalho Salvo</span>
                  <span>82h</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Webmail & CPU usage */}
            <div className="showcase-grid-row">
              {/* Webmail */}
              <div className="showcase-card">
                <h4>Webmail Pro</h4>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                  sender@iagentic.com.br
                </div>
                <div className="showcase-card-stats" style={{ marginTop: '8px' }}>
                  <div className="showcase-stat-item">
                    <span>Taxa de Entrega</span>
                    <span style={{ color: 'var(--cyan)' }}>99.98%</span>
                  </div>
                </div>
              </div>

              {/* CPU load */}
              <div className="showcase-card">
                <h4>Infraestrutura</h4>
                <div style={{ fontSize: '24px', fontWeight: 800, marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                  {cpuUsage}% <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 500 }}>CPU</span>
                </div>
                <div className="showcase-graph-container">
                  <svg viewBox="0 0 100 30" style={{ width: '100%', height: '30px' }}>
                    <path
                      className="showcase-graph-line"
                      d={`M0 25 L20 18 L40 22 L60 12 L80 ${25 - cpuUsage * 0.7} L100 15`}
                      style={{ transition: 'd 0.5s ease-in-out' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3 - Live request logs */}
            <div className="showcase-card" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', fontFamily: 'var(--font-mono)' }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.5px' }}>
                Console de Telemetria SDR
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px', fontSize: '11px' }}>
                {requestFeed.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    <span style={{ color: 'var(--cyan)' }}>&gt;</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
