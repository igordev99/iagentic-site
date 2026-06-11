import React from 'react';

const PLANS = [
  {
    name: "Starter",
    price: "R$ 290",
    period: "/mês",
    type: "free",
    features: [
      "1 Agente de IA ativo",
      "2.500 mensagens com IA/mês",
      "Integração Web Chat",
      "Base de Conhecimento (PDF/Txt)",
      "Telemetria básica de execução"
    ]
  },
  {
    name: "Profissional",
    price: "R$ 790",
    period: "/mês",
    type: "pro",
    features: [
      "Até 3 Agentes de IA ativos",
      "15.000 mensagens com IA/mês",
      "Integração WhatsApp (API Meta)",
      "Integração CRM (HubSpot/RD)",
      "Modelos Premium (GPT-4o/Claude)",
      "Telemetria avançada em tempo real"
    ]
  },
  {
    name: "Empresarial",
    price: "R$ 1.990",
    period: "/mês",
    type: "enterprise",
    features: [
      "Até 10 Agentes de IA ativos",
      "50.000 mensagens com IA/mês",
      "Canais ilimitados (API/Slack/Zap)",
      "Protocolo MCP para conexões internas",
      "Banco vetorial dedicado (RAG)",
      "Suporte dedicado SLA 4h"
    ]
  },
  {
    name: "Consultoria de IA",
    price: "R$ 4.900",
    period: " / setup único",
    type: "consulting",
    features: [
      "Modelagem e Arquitetura de IA",
      "Desenvolvimento de Prompt & RAG",
      "Configuração de Ferramentas MCP",
      "Integração WhatsApp, Web e CRM",
      "Entrega ativa em até 72 horas",
      "Suporte e Garantia pós-entrega"
    ]
  }
];

export default function PricingPlans({ setSetupOpen }) {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header" style={{ margin: '0 auto 48px auto', textAlign: 'center' }}>
          <p className="label-orange" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--cyan)', fontWeight: 700, marginBottom: '8px' }}>
            NOSSOS PREÇOS
          </p>
          <h2 style={{ textTransform: 'uppercase' }}>Escolha a sua <em>Escala.</em></h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Infraestrutura agêntica de alto desempenho e implantação de agentes de IA sob demanda. Planos transparentes e parametrizados.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const isFeatured = plan.type === 'enterprise';
            const isConsulting = plan.type === 'consulting';
            
            return (
              <div 
                key={i} 
                className={`pricing-card ${isFeatured ? 'featured' : ''} ${isConsulting ? 'consulting' : ''}`}
              >
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>{plan.period}</span>
                </div>
                
                <ul>
                  {plan.features.map((feat, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {isConsulting ? (
                  <button 
                    className="btn-cyan btn-full"
                    style={{ background: 'var(--purple)', color: '#fff' }}
                    onClick={() => setSetupOpen(true)}
                  >
                    Contratar Setup
                  </button>
                ) : (
                  <button 
                    className={isFeatured ? "btn-cyan btn-full" : "btn-dark btn-full"}
                    onClick={() => setSetupOpen(true)}
                  >
                    Começar Agora
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
