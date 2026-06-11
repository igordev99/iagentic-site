import React from 'react';

export default function ServiceGrid() {
  return (
    <section id="services">
      <div className="container">
        
        <div className="section-header">
          <p className="label-orange" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--cyan)', fontWeight: 700, marginBottom: '8px' }}>
            NOSSAS SOLUÇÕES
          </p>
          <h2>Simplificamos sua <em>Infraestrutura.</em></h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Performance extrema sem desculpas. Desenvolvemos as ferramentas de hospedagem e automação que nós mesmos gostaríamos de usar no dia a dia.
          </p>
        </div>

        <div className="features-grid-layout">
          {/* Card 1 - Hospedagem */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" x2="8" y1="16" y2="16" />
                <line x1="16" x2="16" y1="16" y2="16" />
              </svg>
            </div>
            <h3>Hospedagem de Elite</h3>
            <p>Infraestrutura NVMe em 12 regiões globais com 99.99% de uptime garantido por acordo de nível de serviço (SLA).</p>
          </div>

          {/* Card 2 - Webmail */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="8" rx="1" />
                <path d="M17 14v7" />
                <path d="M7 14v7" />
                <path d="M17 3v3" />
                <path d="M7 3v3" />
                <path d="M10 14 2.3 6.3" />
                <path d="m14 6 7.7 7.7" />
                <path d="m8 6 8 8" />
              </svg>
            </div>
            <h3>Webmail Pro</h3>
            <p>Acesse sua caixa postal corporativa profissional. Escreva mensagens usando o editor rico Charlotte AI e gerencie assinaturas HTML.</p>
          </div>

          {/* Card 3 - Agentes */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3>Agentes de IA</h3>
            <p>Automações inteligentes personalizadas e painéis de telemetria de SDRs ativos com relatórios consolidados em tempo real.</p>
          </div>

          {/* Card 4 - Consultoria */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
            </div>
            <h3>Consultoria de IA</h3>
            <p>Nossa equipe de engenheiros cria, integra e implanta agentes de IA personalizados sob medida no seu painel corporativo.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
