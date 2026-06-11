import React, { useState, useEffect } from 'react';

const CLIENTS_DATA = [
  { 
    id: 1, name: "Ideal Company", agents: 8, reqs: 850, uptime: 100.0, fte: 0.75, eps: 12,
    robots: [
      { name: "Qualificador SDR 001", model: "Claude 3.5 Sonnet", baseTasks: 4500, baseRoi: 12500 },
      { name: "Suporte Técnico 002", model: "Gemini 1.5 Flash", baseTasks: 18200, baseRoi: 8400 }
    ]
  },
  { 
    id: 2, name: "Sanville Contabilidade", agents: 11, reqs: 1500, uptime: 99.99, fte: 0.8, eps: 25,
    robots: [
      { name: "Planejador Previdenciário 001", model: "Claude 3.5 Sonnet", baseTasks: 3420, baseRoi: 18900 },
      { name: "Emissor de NFS-e 002", model: "Gemini 1.5 Flash", baseTasks: 11200, baseRoi: 14300 },
      { name: "Leitor de Contratos 003", model: "Llama 3 70B", baseTasks: 1820, baseRoi: 9400 }
    ]
  },
  { 
    id: 3, name: "Uphold Contabilidade", agents: 150, reqs: 26800, uptime: 99.97, fte: 0.85, eps: 184,
    robots: [
      { name: "Emissor de NFS-e 001", model: "Claude 3.5 Sonnet", baseTasks: 124000, baseRoi: 540000 },
      { name: "Conciliador Bancário 002", model: "Gemini 1.5 Flash", baseTasks: 852000, baseRoi: 420000 },
      { name: "Leitor de NFe 003", model: "Llama 3 8B", baseTasks: 421000, baseRoi: 380000 }
    ]
  },
  { 
    id: 4, name: "Zac Contábil", agents: 10, reqs: 1150, uptime: 99.99, fte: 0.75, eps: 18,
    robots: [
      { name: "Agendador Cal.com 001", model: "Claude 3.5 Sonnet", baseTasks: 1250, baseRoi: 6200 },
      { name: "Envio de Boleto WhatsApp 002", model: "Gemini 1.5 Flash", baseTasks: 9400, baseRoi: 11000 }
    ]
  },
  {
    id: 5, name: "Nexos Advocacia", agents: 5, reqs: 410, uptime: 99.98, fte: 0.8, eps: 7,
    robots: [
      { name: "Leitor de Petições 001", model: "Claude 3.5 Sonnet", baseTasks: 2100, baseRoi: 16500 }
    ]
  },
  {
    id: 6, name: "Vanguard Construtora", agents: 14, reqs: 1890, uptime: 99.94, fte: 0.78, eps: 20,
    robots: [
      { name: "Agente de Compras 001", model: "Gemini 1.5 Flash", baseTasks: 9450, baseRoi: 32000 }
    ]
  },
  {
    id: 7, name: "Apex E-commerce", agents: 22, reqs: 3120, uptime: 99.98, fte: 0.72, eps: 45,
    robots: [
      { name: "Recuperador de Carrinho 001", model: "Claude 3.5 Sonnet", baseTasks: 15400, baseRoi: 48000 }
    ]
  },
  {
    id: 8, name: "MedPrime Clínicas", agents: 6, reqs: 720, uptime: 100.0, fte: 0.8, eps: 9,
    robots: [
      { name: "Agendador de Consultas 001", model: "Claude 3.5 Sonnet", baseTasks: 3600, baseRoi: 19500 }
    ]
  },
  { 
    id: 9, name: "Contabiliza Descomplica", agents: 6, reqs: 480, uptime: 99.91, fte: 0.7, eps: 8,
    robots: [
      { name: "Triagem de Tickets 001", model: "Gemini 1.5 Flash", baseTasks: 8900, baseRoi: 5800 }
    ]
  },
  { 
    id: 10, name: "Paineira Contabilidade", agents: 4, reqs: 310, uptime: 100.0, fte: 0.8, eps: 5,
    robots: [
      { name: "Lançamento de Contas 001", model: "Llama 3 70B", baseTasks: 3100, baseRoi: 4100 }
    ]
  },
  {
    id: 11, name: "Dr. Saúde Laboratório", agents: 12, reqs: 2150, uptime: 99.97, fte: 0.82, eps: 32,
    robots: [
      { name: "Entrega de Laudos 001", model: "Gemini 1.5 Flash", baseTasks: 21500, baseRoi: 24500 }
    ]
  },
  {
    id: 12, name: "Belo Foco Estética", agents: 3, reqs: 290, uptime: 99.96, fte: 0.75, eps: 4,
    robots: [
      { name: "Instagram SDR 001", model: "Claude 3.5 Sonnet", baseTasks: 1450, baseRoi: 8200 }
    ]
  },
  {
    id: 13, name: "Alfa Seguros", agents: 18, reqs: 2450, uptime: 99.99, fte: 0.8, eps: 35,
    robots: [
      { name: "Renovação Ativa 001", model: "Claude 3.5 Sonnet", baseTasks: 12250, baseRoi: 41200 }
    ]
  },
  {
    id: 14, name: "Parati Distribuidora", agents: 15, reqs: 1980, uptime: 99.92, fte: 0.77, eps: 24,
    robots: [
      { name: "Rastreamento Carga 001", model: "Gemini 1.5 Flash", baseTasks: 9900, baseRoi: 18400 }
    ]
  },
  {
    id: 15, name: "TechSoluções IT", agents: 8, reqs: 940, uptime: 100.0, fte: 0.8, eps: 14,
    robots: [
      { name: "Filtro de Incidentes 001", model: "Llama 3 70B", baseTasks: 4700, baseRoi: 15600 }
    ]
  }
];

export default function TelemetryView() {
  const [selectedClient, setSelectedClient] = useState(CLIENTS_DATA[0]);
  const [baseSalary, setBaseSalary] = useState(4200); // Live site reference: R$ 4.200,00
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [ticker, setTicker] = useState(0);

  // Live ticking simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getTickedTasks = (baseTasks) => {
    return baseTasks + Math.floor(ticker * (1 + Math.random() * 3));
  };

  const calculateROI = (client) => {
    const humanCost = client.agents * client.fte * baseSalary;
    const infraCost = client.agents * 120;
    const savings = humanCost - infraCost;
    return Math.max(0, savings).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calculateInfraCost = (client) => {
    return (client.agents * 120).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calculateHumanCost = (client) => {
    return (client.agents * client.fte * baseSalary).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="telemetry-dashboard container">
      <div className="telemetry-grid-layout">
        
        {/* Sidebar */}
        <aside className="client-sidebar">
          <div className="sidebar-title">Portfólio Ativo B2B</div>
          {CLIENTS_DATA.map((client) => (
            <button
              key={client.id}
              className={`client-item-btn ${selectedClient.id === client.id ? 'active' : ''}`}
              onClick={() => setSelectedClient(client)}
            >
              <h4>{client.name}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '4px' }}>
                <span className="badge">{client.agents} Agentes</span>
                <span style={{ fontSize: '11px', color: 'var(--cyan)' }}>Uptime: {client.uptime}%</span>
              </div>
            </button>
          ))}
        </aside>

        {/* Dashboard Main View */}
        <main className="dashboard-viewport">
          <div className="dash-panel">
            <div className="dash-header-section">
              <div className="dash-header-info">
                <h2>{selectedClient.name}</h2>
                <p style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <span>Ref. Salarial Base: <strong style={{ color: '#fff' }}>{baseSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></span>
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
                  <span>Smart Routing: <strong style={{ color: 'var(--cyan)' }}>ATIVO</strong></span>
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
                  <span>Processamento Geral (EPS): <strong style={{ color: 'var(--purple)' }}>{selectedClient.eps} req/s</strong></span>
                </p>
              </div>
              
              <button className="btn-sm" onClick={() => setIsConfigOpen(true)}>
                ⚙️ Parametrizar Custos
              </button>
            </div>

            {/* Dashboard metrics grid */}
            <div className="dash-stats-grid">
              <div className="dash-metric-card">
                <span className="label">Agentes de IA Ativos</span>
                <span className="val highlight">{selectedClient.agents}</span>
              </div>
              <div className="dash-metric-card">
                <span className="label">Requisições diárias</span>
                <span className="val">{(selectedClient.reqs + ticker * 2).toLocaleString('pt-BR')} req/dia</span>
              </div>
              <div className="dash-metric-card">
                <span className="label">Uptime do Servidor</span>
                <span className="val" style={{ color: selectedClient.uptime === 100 ? 'var(--cyan)' : '#69D81B' }}>
                  {selectedClient.uptime}%
                </span>
              </div>
            </div>

            {/* ROI Cost Comparison Card */}
            <div className="roi-card">
              <div className="roi-info">
                <h3>Economia Líquida Estimada</h3>
                <p>
                  Diferença entre a folha de pagamento equivalente do squad operacional e a taxa de hospedagem iAgentic.
                </p>
              </div>
              <div className="roi-value">
                {calculateROI(selectedClient)}
                <span style={{ fontSize: '11px', display: 'block', color: 'var(--muted)', textAlign: 'right', fontWeight: 500 }}>economizados / mês</span>
              </div>
            </div>

            {/* Robot cards section */}
            <div className="robots-section-title">Lista de Robôs Ativos</div>
            
            <div className="robots-list-grid">
              {selectedClient.robots.map((bot, idx) => (
                <div key={idx} className="robot-card-item">
                  <div className="robot-card-header">
                    <h5>{bot.name}</h5>
                    <span className="robot-status-pill">Ativo</span>
                  </div>
                  
                  <div className="robot-card-meta">
                    <span>Modelo de IA</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{bot.model}</span>
                  </div>
                  
                  <div className="robot-card-meta">
                    <span>Tarefas Concluídas</span>
                    <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      {getTickedTasks(bot.baseTasks).toLocaleString('pt-BR')}
                    </span>
                  </div>

                  <div className="robot-card-meta">
                    <span>Custo Estimado</span>
                    <span style={{ color: 'var(--cyan)' }}>R$ 120,00</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>

      {/* Config Modal */}
      <div className={`config-modal ${isConfigOpen ? 'open' : ''}`}>
        <div className="config-modal-card">
          <h3>Parametrizar Custos</h3>
          <p>Defina o salário base humano (incluindo encargos) considerado como referência para cálculo de ROI.</p>
          
          <div className="form-group">
            <label htmlFor="salaryRange">
              Salário Humano Referência: <strong>{baseSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
            </label>
            <input
              type="range"
              id="salaryRange"
              min="1500"
              max="15000"
              step="100"
              value={baseSalary}
              onChange={(e) => setBaseSalary(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--cyan)', marginTop: '8px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '16px' }}>
            <button className="btn-cyan" onClick={() => setIsConfigOpen(false)} style={{ height: '36px', padding: '0 16px', fontSize: '13px' }}>
              Confirmar
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
