import React, { useState, useEffect } from 'react';

const PORTFOLIO_AGENTS = [
  {
    client: "Ideal Company",
    agentType: "Agente de SDR Inteligente",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "98.4%",
    metric2Name: "Taxa de Leads/Hora",
    metric2Val: 141,
    metric3Name: "Tempo de Trabalho Salvo",
    metric3Val: "82h",
    webmail: "sender@iagentic.com.br",
    deliveryRate: "99.98%",
    consoleName: "Console de Telemetria SDR",
    logs: [
      "Lead qualificado: Everton R. (Comercial)",
      "Mensagem enviada: WhatsApp Business API",
      "E-mail Charlotte Pro enviado"
    ]
  },
  {
    client: "Sanville Contabilidade",
    agentType: "Agente de NFS-e Automático",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.9%",
    metric2Name: "NFS-e Processadas",
    metric2Val: 1530,
    metric3Name: "Tempo de Trabalho Salvo",
    metric3Val: "148h",
    webmail: "nfse@sanville.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Leitura Sanville",
    logs: [
      "Leitura de contrato concluída via OCR",
      "Calculando tempo previdenciário: OK",
      "Guia DAS emitida e enviada por e-mail"
    ]
  },
  {
    client: "Uphold Contabilidade",
    agentType: "Agente Conciliador Bancário",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.97%",
    metric2Name: "Conciliações Realizadas",
    metric2Val: 26800,
    metric3Name: "Economia Realizada (FTE)",
    metric3Val: "85%",
    webmail: "conciliacao@uphold.com.br",
    deliveryRate: "99.95%",
    consoleName: "Console de Conciliação Uphold",
    logs: [
      "Handshake API Itaú: OK",
      "Conciliação bancária concluída",
      "Divergência de R$ 0,00 identificada"
    ]
  },
  {
    client: "Zac Contábil",
    agentType: "Agente de Agendamento Cal.com",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.99%",
    metric2Name: "Agendamentos Concluídos",
    metric2Val: 1150,
    metric3Name: "Boletos Enviados",
    metric3Val: "9.4k",
    webmail: "agenda@zac.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Agendamento Zac",
    logs: [
      "Webhook Cal.com recebido",
      "Reunião agendada com sucesso",
      "Boleto gerado via WhatsApp"
    ]
  }
];

export default function Hero({ navigateTo, setSetupOpen }) {
  const [agentIndex, setAgentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ticker, setTicker] = useState(0);
  
  const currentAgent = PORTFOLIO_AGENTS[agentIndex];
  const [requestFeed, setRequestFeed] = useState([]);

  // Sync log feed when agent changes
  useEffect(() => {
    setRequestFeed(
      currentAgent.logs.map((logText, i) => ({
        id: i,
        text: logText
      }))
    );
  }, [agentIndex]);

  // Rotator & stats simulator
  useEffect(() => {
    const statsInterval = setInterval(() => {
      // Fluctuating CPU
      setCpuUsage(prev => {
        const next = prev + (Math.random() > 0.5 ? 2 : -2);
        return Math.max(8, Math.min(22, next));
      });
      // Increment ticker to tick values
      setTicker(prev => prev + 1);
    }, 3000);

    const rotatorInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setAgentIndex(prev => (prev + 1) % PORTFOLIO_AGENTS.length);
        setFade(true);
      }, 300);
    }, 6000);

    return () => {
      clearInterval(statsInterval);
      clearInterval(rotatorInterval);
    };
  }, []);

  const getDisplayMetric2 = () => {
    if (typeof currentAgent.metric2Val === 'number') {
      return (currentAgent.metric2Val + Math.floor(ticker * 0.4)).toLocaleString('pt-BR');
    }
    return currentAgent.metric2Val;
  };

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
          <div className={`dashboard-showcase ${fade ? 'fade-in' : 'fade-out'}`}>
            
            {/* Row 1 - Active Agent */}
            <div className="showcase-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--cyan)', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '2px' }}>
                    {currentAgent.client}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700 }}>{currentAgent.agentType}</h4>
                </div>
                <div className="status-indicator">
                  <span className="pulse-dot"></span>
                  Online
                </div>
              </div>
              <div className="showcase-card-stats">
                <div className="showcase-stat-item">
                  <span>Precisão Operacional</span>
                  <span>{currentAgent.metric1Val}</span>
                </div>
                <div className="showcase-stat-item">
                  <span>{currentAgent.metric2Name}</span>
                  <span>{getDisplayMetric2()}</span>
                </div>
                <div className="showcase-stat-item">
                  <span>{currentAgent.metric3Name}</span>
                  <span>{currentAgent.metric3Val}</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Webmail & CPU usage */}
            <div className="showcase-grid-row">
              {/* Webmail */}
              <div className="showcase-card">
                <h4>Webmail Pro</h4>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {currentAgent.webmail}
                </div>
                <div className="showcase-card-stats" style={{ marginTop: '8px' }}>
                  <div className="showcase-stat-item">
                    <span>Taxa de Entrega</span>
                    <span style={{ color: 'var(--cyan)' }}>{currentAgent.deliveryRate}</span>
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
                {currentAgent.consoleName}
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
