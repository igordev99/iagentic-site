import React, { useState, useEffect, useRef } from 'react';

const LOG_TEMPLATES = [
  "Charlotte initialized successfully.",
  "Connected to Database via MCP Client: OK",
  "WhatsApp webhook connection established.",
  "Inbound request received: WhatsApp (+55 11 99999-9999)",
  "NLP Model Processing: parse intent...",
  "Intent identified: SDR_APPOINTMENT_REQUEST",
  "Checking Cal.com slot availability...",
  "Cal.com returned slot: 2026-06-12 14:00:00",
  "WhatsApp: Proposta enviada para o cliente.",
  "CRM webhook: Lead qualificado com score 94.2%",
  "Supabase: Cadastrado novo lead corporativo.",
  "SMTP Webmail: Charlotte redigiu rascunho de e-mail.",
  "Uptime monitor: node-worker-1 response time 25ms",
];

export default function ConsultoriaView({ setSetupOpen }) {
  const [logs, setLogs] = useState([
    { id: 1, time: "12:43:02", msg: "Charlotte Engine v2.4 initialized." },
    { id: 2, time: "12:43:05", msg: "Conectado à API Hubspot via MCP." },
    { id: 3, time: "12:43:09", msg: "Webmail Charlotte: SMTP handshake ok." },
  ]);
  const consoleScreenRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomMsg = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
      
      setLogs(prev => [
        ...prev,
        { id: Date.now(), time: timeStr, msg: randomMsg }
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (consoleScreenRef.current) {
      consoleScreenRef.current.scrollTop = consoleScreenRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="consultoria-container">
      <div className="consultoria-header">
        <span className="mcp-badge" style={{ color: 'var(--cyan)' }}>✦ CONSTRUA ROBÔS REAIS</span>
        <h1>CONSTRUA<br /><em>ROBÔS REAIS.</em></h1>
        <p className="hero-sub" style={{ margin: '16px auto 32px' }}>
          Sem exigir contratação de hospedagem prévia. Primeiro analisamos o seu negócio, integramos chaves de CRM/WhatsApp e criamos o setup. O robô roda na nossa infraestrutura dedicada.
        </p>
        
        <button className="btn-cyan" onClick={() => setSetupOpen(true)}>
          CONFIGURAR AGENTE & CONTRATAR <span>&rarr;</span>
        </button>
      </div>

      {/* Metrics Bar */}
      <div className="mcp-metrics-bar">
        <div className="mcp-metric-item">
          <span className="pulse-dot"></span>
          <span>Taxa de Resposta: <strong>&lt; 3.0s</strong> (Imediato)</span>
        </div>
        <div className="mcp-metric-item">
          <span className="pulse-dot"></span>
          <span>Qualificação Ativa: <strong>92.4%</strong> (Leads Identificados)</span>
        </div>
        <div className="mcp-metric-item">
          <span className="pulse-dot"></span>
          <span>Conexão MCP: <strong>Ativa ✓</strong> (WhatsApp & CRM)</span>
        </div>
        <div className="mcp-metric-item">
          <span className="pulse-dot orange"></span>
          <span>Setup Único: <strong>R$ 499</strong> (Sem mensalidade inicial)</span>
        </div>
      </div>

      {/* Logging Terminal Cockpit */}
      <div className="log-console-card">
        <div className="log-console-header">
          <div className="log-console-dots">
            <span className="log-dot red"></span>
            <span className="log-dot yellow"></span>
            <span className="log-dot green"></span>
          </div>
          <span>Charlotte AI Real-Time Agent Logs (charlotte_agent_monitor.cfg)</span>
        </div>
        <div className="log-console-screen" ref={consoleScreenRef}>
          {logs.map((log) => (
            <div key={log.id} className="log-line">
              <span className="log-time">[{log.time}]</span>
              <span className="log-msg">{log.msg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ROI / Integration Explainer */}
      <div className="mcp-showcase" style={{ background: 'transparent', border: '1px solid var(--border)', marginBottom: '64px' }}>
        <div className="mcp-info" style={{ paddingRight: '0' }}>
          <span className="mcp-badge">✦ INTEGRAÇÃO MCP NATIVA</span>
          <h2>Integre o agente aos seus sistemas</h2>
          <p>
            Nossos engenheiros constroem chaves de conexão customizadas utilizando a arquitetura <strong>MCP (Model Context Protocol)</strong>. Isso permite que a Charlotte leia bancos de dados SQL, cadastre novos negócios de forma ativa no CRM e responda clientes no WhatsApp no mesmo segundo.
          </p>
        </div>
        <div className="mcp-diagram" style={{ background: 'var(--surface)', position: 'relative' }}>
          {/* Glowing Animated SVG Connectors */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            {/* Background connection paths */}
            <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Glowing active flow pulses */}
            <line className="mcp-pulse-line sat-1-pulse" x1="50%" y1="50%" x2="15%" y2="20%" />
            <line className="mcp-pulse-line sat-2-pulse" x1="50%" y1="50%" x2="85%" y2="20%" />
            <line className="mcp-pulse-line sat-3-pulse" x1="50%" y1="50%" x2="15%" y2="80%" />
            <line className="mcp-pulse-line sat-4-pulse" x1="50%" y1="50%" x2="85%" y2="80%" />
          </svg>

          <div className="mcp-diagram-core" style={{ zIndex: 2 }}>Charlotte</div>
          <div className="mcp-diagram-satellite sat-1" style={{ color: 'var(--cyan)', zIndex: 2 }}>WhatsApp</div>
          <div className="mcp-diagram-satellite sat-2" style={{ color: 'var(--purple)', zIndex: 2 }}>Hubspot</div>
          <div className="mcp-diagram-satellite sat-3" style={{ zIndex: 2 }}>PostgreSQL</div>
          <div className="mcp-diagram-satellite sat-4" style={{ zIndex: 2 }}>SMTP Server</div>
        </div>
      </div>

      {/* Onboarding Timeline */}
      <div className="jornada-section">
        <h2>Sua Jornada de Implantação</h2>
        <div className="jornada-grid">
          <div className="jornada-card">
            <div className="jornada-num">01</div>
            <h3>ESCOLHA O ESCOPO</h3>
            <p>Selecione os objetivos principais do agente de IA e canais de comunicação de forma pública na Landing Page.</p>
          </div>
          <div className="jornada-card">
            <div className="jornada-num">02</div>
            <h3>CHECKOUT E CADASTRO</h3>
            <p>Realize o pagamento único da taxa de Setup (R$ 499,00) via Pix e crie sua senha de acesso ao painel corporativo.</p>
          </div>
          <div className="jornada-card">
            <div className="jornada-num">03</div>
            <h3>BRIEFING E CAL.COM</h3>
            <p>Dentro do painel, anexe documentos (PDFs, regras de negócio) e agende a reunião de alinhamento com nossos engenheiros.</p>
          </div>
          <div className="jornada-card">
            <div className="jornada-num">04</div>
            <h3>IMPLANTAÇÃO</h3>
            <p>Configuramos as ferramentas MCP, testamos e ativamos o robô no mesmo dia em sua infraestrutura dedicada.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
