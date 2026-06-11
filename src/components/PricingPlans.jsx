import React from 'react';

const PLANS = [
  {
    name: "Gratuito",
    price: "R$ 0,00",
    period: "/mês",
    type: "free",
    features: [
      "1 Site ativo",
      "1GB Armazenamento NVMe",
      "10 E-mails por mês",
      "Suporte básico por e-mail",
      "Charlotte AI básico"
    ]
  },
  {
    name: "Profissional",
    price: "R$ 29,90",
    period: "/mês",
    type: "pro",
    features: [
      "5 Sites ativos",
      "10GB Armazenamento NVMe",
      "100 E-mails por mês",
      "E-mail corporativo",
      "Suporte prioritário 24/7"
    ]
  },
  {
    name: "Empresarial",
    price: "R$ 99,90",
    period: "/mês",
    type: "enterprise",
    features: [
      "20 Sites ativos",
      "100GB Armazenamento NVMe",
      "1000 E-mails por mês",
      "E-mail corporativo ilimitado",
      "Mala direta ativa",
      "Suporte dedicado",
      "Acesso completo à API"
    ]
  },
  {
    name: "Consultoria de IA",
    price: "R$ 499,00",
    period: " / setup único",
    type: "consulting",
    features: [
      "Sessão de Alinhamento Técnico",
      "Desenvolvimento de Prompt de IA",
      "Configuração de Ferramentas MCP",
      "Integração WhatsApp/Webmail/CRM",
      "Entrega ativa em menos de 48h"
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
            Hospedagem de alto desempenho e setup de agentes sob demanda. Planos transparentes e parametrizados.
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
