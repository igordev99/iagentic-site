import React from 'react';

export default function Integrations() {
  const handleStartClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features">
      <div className="container">
        <h2 className="big-heading">Todos os recursos em um só lugar</h2>
        <div className="integrations-split">
          <div className="integrations-left">
            <h2>Conexões sem esforço em todas as plataformas</h2>
          </div>
          <div className="integrations-right">
            <p>
              Conectamos tudo o que você usa. WhatsApp, Instagram, e-mail, CRM - tudo trabalhando junto, sem complicação.
            </p>
            <a href="#contact" className="btn-sm" onClick={handleStartClick}>
              Começar Agora
            </a>
          </div>
        </div>
        
        <div className="orbit-area">
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>
          
          {/* Email / Webmail */}
          <div className="orbit-dot orbit-dot-1" title="E-mail & Webmail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
            </svg>
          </div>
          
          {/* Code / Developer APIs */}
          <div className="orbit-dot orbit-dot-2" title="API Webhooks">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          
          {/* Database / CRM */}
          <div className="orbit-dot orbit-dot-3" title="CRM & Banco de Dados">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" x2="18" y1="20" y2="10"/>
              <line x1="12" x2="12" y1="20" y2="4"/>
              <line x1="6" x2="6" y1="20" y2="14"/>
            </svg>
          </div>
          
          {/* Security / Shield */}
          <div className="orbit-dot orbit-dot-4" title="Segurança Avançada">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            </svg>
          </div>
          
          {/* Monitoring / AI Eyes */}
          <div className="orbit-dot orbit-dot-5" title="Monitoramento Inteligente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          
          {/* Chatbots / Communication */}
          <div className="orbit-dot orbit-dot-6" title="WhatsApp Business">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          
          {/* Center Lightning */}
          <div className="orbit-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
